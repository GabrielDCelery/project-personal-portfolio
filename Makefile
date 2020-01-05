dev:
	docker-compose -f ./deploy/docker-compose.yml -f ./deploy/docker-compose.dev.yml up --build
prod-http:
	bash ./deploy/production.http.sh
prod-https:
	bash ./deploy/production.https.sh