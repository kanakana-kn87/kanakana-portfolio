# 最終版 Dockerfile（ENTRYPOINT/CMDを削除！）
FROM node:22.18.0-alpine

# ENV COMMAND="dev" は不要！

WORKDIR /app
COPY package*.json ./
RUN npm install

# 💥 docker-entrypoint.sh のコピーと chmod は不要！
# COPY docker-entrypoint.sh /usr/local/bin/
# RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY . .

# 💥 ENTRYPOINT と CMD も不要！KubernetesのYAMLに任せる！
# ENTRYPOINT ["docker-entrypoint.sh"]
# CMD [] 

# ※ ただし、何も設定しないとイメージのデフォルトCMDが使われるので、
#    シンプルにこれだけ設定しておくのもアリだよ！
# CMD ["npm", "start"]