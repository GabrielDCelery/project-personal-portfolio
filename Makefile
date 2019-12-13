development:
	docker-compose -f ./deploy/docker-compose.yml -f ./deploy/docker-compose.dev.yml up --build
production:
	bash ./deploy/create_self_signed_certificate_if_not_exists.sh
	docker-compose -f ./deploy/docker-compose.yml -f ./deploy/docker-compose.prod.yml up --build
	bash ./deploy/validate_and_or_create_certificate_using_certbot.sh
end-to-end-tests:
	docker-compose -f ./deploy/docker-compose.yml -f ./deploy/docker-compose.e2e.yml up --build --exit-code-from end_to_end_tests