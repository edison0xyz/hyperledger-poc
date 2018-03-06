#!/bin/bash
docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
composer archive create -t dir -n .
./restartCDSFabric.sh
./startComposerFunctions.sh
