#!/bin/bash
docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
./restartCDSFabric.sh
./startComposerFunctions.sh
./composer archive create -t dir -n .