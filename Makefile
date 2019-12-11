development:
	docker-compose -f ./docker-compose.yml -f ./docker-compose.dev.yml up --build
production:
	docker-compose -f ./docker-compose.yml -f ./docker-compose.prod.yml up --build
end-to-end-tests:
	docker-compose -f ./docker-compose.yml -f ./docker-compose.e2e.yml up --build --exit-code-from end_to_end_tests