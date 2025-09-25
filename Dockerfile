# ベースとなるNode.jsの公式イメージを指定するよ！
FROM node:22.18.0-alpine

ENV COMMAND="dev"
WORKDIR /app
COPY package*.json ./
RUN npm install

# エントリーポイントスクリプトをコピーして実行権限を与える
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY . .

# ENTRYPOINTでスクリプトを実行し、CMDでデフォルトの引数を指定
ENTRYPOINT ["docker-entrypoint.sh"]

# CMDはENTRYPOINTに渡す引数（この場合は空でOK、ENVがメイン！）
CMD []