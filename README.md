# What is this project for?

This is my personal portfolio site

## Project folder structure

| Key Files/Folders | What is inside                                                 |
| ----------------- | -------------------------------------------------------------- |
| .circleci         | Configuration for CircleCI                                     |
| app/frontend      | Code for frontend application                                  |
| app/reverse_proxy | Configurations for NGINX reverse proxy                         |
| deploy            | Scripts and configs for deploying the application on the cloud |
| Makefile          | Entrypoint scripts                                             |

## Run development environment

To start a development environment run

```
make dev
```

The above command will do the followings:

1. Builds the Docker dev image
2. Starts running containers

| Containers            | What is it running  | What is it for             | Port |
| --------------------- | ------------------- | -------------------------- | ---- |
| app_reverse_proxy_dev | Nginx reverse proxy | Reverse proxy for frontend | 80   |
| app_frontend_dev      | ReactJs             | Portfolio website          | 3000 |

If the containers are running properly you can access the frontend at `localhost`.

## Purging system of redundant docker containers

If you got redundant docker containers and images on your local machines you can use the following commands to remove those images:

```
docker rm $(docker ps -a -q) --force
docker rmi $(docker images -q) --force
docker volume rm $(docker volume ls -qf dangling=true)
```

## Run production environment

These scripts are tailored to work with my custom CircleCI and DigitalOcean setup

```
make prod-http
```

OR

```
make prod-https
```
