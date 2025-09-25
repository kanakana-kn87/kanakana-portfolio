# ベースとなるNode.jsの公式イメージを指定するよ！
FROM node:22.18.0-alpine

ENV COMMAND="dev"
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .