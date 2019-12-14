dev:
	docker-compose -f ./deploy/docker-compose.yml -f ./deploy/docker-compose.dev.yml up --build
prod-http:
	bash ./deploy/production.http.sh
prod-https:
	bash ./deploy/production.https.sh
end-to-end-tests:
	docker-compose -f ./deploy/docker-compose.yml -f ./deploy/docker-compose.e2e.yml up --build --exit-code-from end_to_end_tests