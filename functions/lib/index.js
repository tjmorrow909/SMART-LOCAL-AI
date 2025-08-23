"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.geminiProxy = void 0;
const https_1 = require("firebase-functions/v2/https");
const logger = __importStar(require("firebase-functions/logger"));
const genai_1 = require("@google/genai");
const app_1 = require("firebase-admin/app");
const params_1 = require("firebase-functions/params");
// Initialize Firebase Admin SDK.
(0, app_1.initializeApp)();
// Define the Gemini API Key as a secret.
// The value must be set using the Firebase CLI:
// firebase functions:secrets:set GEMINI_API_KEY
const geminiApiKey = (0, params_1.defineSecret)("GEMINI_API_KEY");
// Lazily initialize the GoogleGenAI client to be reused across function calls.
let ai = null;
const getAiClient = () => {
    if (!ai) {
        // The .value() method can only be accessed within a function execution.
        ai = new genai_1.GoogleGenAI({ apiKey: geminiApiKey.value() });
    }
    return ai;
};
// This is a callable cloud function that acts as a secure proxy to the Gemini API.
exports.geminiProxy = (0, https_1.onCall)({ secrets: [geminiApiKey] }, async (request) => {
    const { action, params } = request.data;
    logger.info(`Proxying Gemini action: "${action}"`, { structuredData: true });
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
                throw new https_1.HttpsError("invalid-argument", `The action "${action}" is not supported.`);
            }
        }
    }
    catch (error) {
        logger.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            throw new https_1.HttpsError("internal", "An error occurred while calling the Gemini API.", error.message);
        }
        throw new https_1.HttpsError("internal", "An unknown error occurred while calling the Gemini API.");
    }
});
//# sourceMappingURL=index.js.map