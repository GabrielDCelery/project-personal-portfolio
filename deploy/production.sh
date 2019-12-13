FILE_CERT=/etc/letsencrypt/live/gabrielzeller.co.uk/fullchain.pem
FILE_KEY=/etc/letsencrypt/live/gabrielzeller.co.uk/privkey.pem

if [[ ! -f "$FILE_CERT" || ! -f "$FILE_KEY" ]]; then
	docker-compose -f ./deploy/docker-compose.yml -f ./deploy/docker-compose.prod.staging.yml up --build --exit-code-from certbot
fi

docker-compose -f ./deploy/docker-compose.yml -f ./deploy/docker-compose.prod.yml up --build