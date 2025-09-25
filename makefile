.PHONY: all build install stop nextbuild
all: run

run:
	@kubectl apply -f deployment.yaml

	@kubectl apply -f service.yaml
build:
	@docker build -t kanakana-portfolio .
nextbuild:
	@docker run kanakana-portfolio npm run build
stop:
	@kubectl scale deployment kanakana-portfolio-deployment --replicas=0