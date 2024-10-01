FROM node:16

WORKDIR /nodejs_backend/

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]