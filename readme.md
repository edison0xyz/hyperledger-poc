# Credit Default Swap (CDS) Proof-of-Concept

Proof of concept is developed on `hyperledger fabric v1.0`.

Structure:

* cds-network: codebase for hyperledger
* fabric-tools: config files downloaded from hyperledger, but edited for cds-network
* cdsApp: Web application to view transactions. Developed on Angular 5.

## Running CDS Network

Prerequisites:

PeerAdmin must be generated in `/tmp` file. Enroll secret and pw can be anything. 

From the `/cds-network` directory: 

1. Create the `.bna` file. `composer archive create -t dir -n .`
2. Start the Peer Nodes and Chaincode Container (simulated using Docker images): `./restartCDSFabric.sh`
3. Start the Hyperledger Network: `./startComposerFunctions.sh`

Alternatively, you can do `./runall.sh` which will run all scripts necessary.

Deploy a REST service: `composer-rest-server`. Name of business network: `admin@cds-network`.

## Running the Web App

From the `/cdsApp` directory:

* Run `ng serve --open`. Web app should be deployed on `locahost:4200`.