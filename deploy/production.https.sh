docker stop $(docker ps -a -q)

DEPLOY_FOLDER=/var/www/
PROJECT_FOLDER=project-personal-portfolio

cd $DEPLOY_FOLDER

if [[ ! -d "$DEPLOY_FOLDER$PROJECT_FOLDER" ]]; then
	git clone git@github.com:GabrielDCelery/project-personal-portfolio.git
fi

cd $PROJECT_FOLDER

git checkout master
git pull

FILE_CERT=/etc/letsencrypt/live/gabrielzeller.co.uk/fullchain.pem
FILE_KEY=/etc/letsencrypt/live/gabrielzeller.co.uk/privkey.pem

if [[ ! -f "$FILE_CERT" || ! -f "$FILE_KEY" ]]; then
	docker-compose \ 
  -f ./deploy/docker-compose.yml \
  -f ./deploy/docker-compose.prod.https.staging.yml \
  up --build --exit-code-from certbot
fi

IS_FAKE_CERTIFICATE=$(openssl x509 -in "$FILE_CERT" -text -noout | grep -q "Fake LE Intermediate X1")

if [[ IS_FAKE_CERTIFICATE ]]; then
	docker-compose \ 
  -f ./deploy/docker-compose.yml \
  -f ./deploy/docker-compose.prod.https.renewal.yml \
  up --build --exit-code-from certbot
fi

docker-compose \
-f ./deploy/docker-compose.yml \
-f ./deploy/docker-compose.prod.https.yml \
up --build --detach