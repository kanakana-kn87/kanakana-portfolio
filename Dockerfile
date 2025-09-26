# ベースとなるNode.jsの公式イメージを指定するよ！
FROM node:22.18.0-alpine AS build-stage 

ENV COMMAND="dev"
WORKDIR /app
COPY package*.json ./

FROM build-stage AS dependencies

RUN npm install

COPY . .