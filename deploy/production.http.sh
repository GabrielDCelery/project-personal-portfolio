docker stop $(docker ps -a -q)

DEPLOY_FOLDER=/var/www/
PROJECT_FOLDER=project-personal-portfolio

cd $DEPLOY_FOLDER

if [[ ! -d "$DEPLOY_FOLDER$PROJECT_FOLDER" ]]; then
	git clone git@github.com:GabrielDCelery/project-personal-portfolio.git
fi

cd $PROJECT_FOLDER

git pull

docker-compose \
-f ./deploy/docker-compose.yml \
-f ./deploy/docker-compose.prod.http.yml up \
--build --detach
