import {onCall, HttpsError} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {GoogleGenAI} from "@google/genai";
import {initializeApp} from "firebase-admin/app";
import {defineSecret} from "firebase-functions/params";

// Initialize Firebase Admin SDK.
initializeApp();

// Define the Gemini API Key as a secret.
// The value must be set using the Firebase CLI:
// firebase functions:secrets:set GEMINI_API_KEY
const geminiApiKey = defineSecret("GEMINI_API_KEY");

// Lazily initialize the GoogleGenAI client to be reused across function calls.
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    // The .value() method can only be accessed within a function execution.
    ai = new GoogleGenAI({apiKey: geminiApiKey.value()});
  }
  return ai;
};


// This is a callable cloud function that acts as a secure proxy to the Gemini API.
export const geminiProxy = onCall({secrets: [geminiApiKey]}, async (request) => {
  const {action, params} = request.data;
  logger.info(`Proxying Gemini action: "${action}"`, {structuredData: true});

  const aiClient = getAiClient();

  try {
    switch (action) {
      case "generateContent": {
        const response = await aiClient.models.generateContent(params);
        // Return a serializable version of the response for the client.
        return {
          text: response.text,
          candidates: response.candidates,
        };
      }
      case "generateImages": {
        const response = await aiClient.models.generateImages(params);
        // The image bytes are already base64 encoded strings,
        // so this is safe to return.
        return {
          generatedImages: response.generatedImages,
        };
      }
      default: {
        logger.error("Unknown action requested:", action);
        throw new HttpsError(
          "invalid-argument",
          `The action "${action}" is not supported.`
        );
      }
    }
  } catch (error) {
    logger.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
      throw new HttpsError(
        "internal",
        "An error occurred while calling the Gemini API.",
        error.message
      );
    }
    throw new HttpsError(
      "internal",
      "An unknown error occurred while calling the Gemini API."
    );
  }
});
