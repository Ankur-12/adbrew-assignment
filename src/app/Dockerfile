FROM node:16

WORKDIR /src/app

COPY package.json ./
RUN npm install

COPY . .

ENV NODE_OPIONS=--openssl-legacy-provider

EXPOSE 3000

CMD ["npm", "start"]
