#!/bin/bash
<<<<<<< HEAD
# This script automates the deployment from a .bna file
composer network install --card PeerAdmin@hlfv1 --archiveFile cds.bna
composer network start --networkName cds --networkVersion 0.0.2-deploy.1 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file cdsAdmin.card
composer card import --file cdsAdmin.card
composer network ping --card admin@cds
composer-rest-server -c admin@cds -n always -w true
=======
composer network install --archiveFile cds-network --card PeerAdmin@hlfv1
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile cds-network@0.0.1.bna --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@cds-network
>>>>>>> 579ca9331fcf412b6e78b46e6ff7edf1447da776
