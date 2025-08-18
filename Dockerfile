FROM node:18

WORKDIR /app

COPY package*.json ./\n
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080

CMD [ "node", "server.js" ]
