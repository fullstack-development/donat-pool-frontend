#!/bin/sh

docker stop donat-pool
docker rm donat-pool
docker rmi donat-pool
docker build --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_rsa1)" . -t donat-pool
docker run -p 4008:4008 --network host --name donat-pool -d donat-pool

export VOLUME_SOURCE = ~/kupo
docker-compose build --build-arg SSH_PRIVATE_KEY="$(cat ~/.ssh/id_rsa)"