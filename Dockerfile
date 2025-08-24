# Use Node.js for build stage
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY . .

# Install dependencies and build production assets
RUN npm install
RUN npm run build

# Production image
FROM node:20-alpine
WORKDIR /app

# Copy built assets and server code
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./
COPY package*.json ./

# Reinstall only production dependencies
RUN npm install --only=production

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080
CMD ["node", "server.js"]
