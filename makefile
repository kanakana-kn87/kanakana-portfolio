# Next.js の世界へレッツゴー！

# .PHONY: は必須だよ！
.PHONY: all build prod stop
all: dev
# 開発環境を起動する
dev:
	@echo "🛠️ 開発サーバーを起動するよ！ホットリロードが効くはずだよ！"
	@docker-compose up

# (必要なら) イメージだけビルド
build:
	@docker-compose build

# 本番環境用にイメージをビルドする（Dockerfileのマルチステージビルドが前提だよ！）
prod:
	@echo "🚀 本番用イメージをビルドするよ！"
	@docker build -t kanakana-portfolio:latest .
	
# コンテナを停止・削除する
stop:
	@echo "🛑 コンテナを停止するよ！"
	@docker-compose down