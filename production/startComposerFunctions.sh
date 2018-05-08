#!/bin/bash
# This script automates the deployment from a .bna file
composer network install --card PeerAdmin@hlfv1 --archiveFile cds.bna
composer network start --networkName cds --networkVersion 0.0.2-deploy.1 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file cdsAdmin.card
composer card import --file cdsAdmin.card
composer network ping --card admin@cds
composer-rest-server -c admin@cds -n always -w true
