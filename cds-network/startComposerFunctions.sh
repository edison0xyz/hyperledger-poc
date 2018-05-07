#!/bin/bash
composer network install --archiveFile cds-network --card PeerAdmin@hlfv1
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile cds-network@0.0.1.bna --file networkadmin.card
composer card import --file networkadmin.card
composer network ping --card admin@cds-network
