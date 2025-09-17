.PHONY: all build install
all: run

run:
	@npm run dev
build:
	@npm run build
install:
	npm install