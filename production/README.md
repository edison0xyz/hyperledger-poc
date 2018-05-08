# Instructions for Deployment
Latest version: 0.0.2-deploy.0

This directory contains latest stable fabric network `.bna` archive. A business network archive (`.bna`) is required to install and run the network. 

Tested on `Composer runtime version: 0.19.4`

## Instructions

From `production/`:

1. Generate PeerAdmin Card: `~/fabric-dev-servers/createPeerAdminCard.sh`
2. Restart fabric network: `../utility-tools/restartCDSFabric.sh`
3. Run `./startComposerFunctions.sh`

### Troubleshooting and Advanced Users

If step three does not run, try running these commands separately:

```
composer network install --card PeerAdmin@hlfv1 --archiveFile cds-network.bna
composer network start --networkName cds-network --networkVersion 0.0.2-deploy.0 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file cdsAdmin.card
composer card import --file cdsAdmin.card
composer network ping --card admin@cds-network
composer-rest-server -c admin@cds-network -n always -w true
```