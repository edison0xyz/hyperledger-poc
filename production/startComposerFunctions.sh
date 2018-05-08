#!/bin/bash
# This script automates the deployment from a .bna file
composer network install --card PeerAdmin@hlfv1 --archiveFile cds-network.bna
composer network start --networkName cds-network --networkVersion 0.0.2-deploy.0 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file cdsAdmin.card
composer card import --file cdsAdmin.card
composer network ping --card admin@cds-network
composer-rest-server -c admin@cds-network -n always -w true
