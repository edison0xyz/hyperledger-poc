# Credit Default Swap (CDS) Proof-of-Concept

Proof of concept is developed on `hyperledger fabric v1.0`.

Structure:

* cds-network: codebase for hyperledger
* fabric-tools: config files downloaded from hyperledger, but edited for cds-network
* cdsApp: Web application to view transactions. Developed on Angular 5.

## Deploying

To deploy, you must first start the fabric network, start REST service and then launch the web app. 

### Prerequisites:

PeerAdmin must be generated in `/tmp` file. Enroll secret and pw can be anything. 

### Start Fabric Network
From the `/cds-network` directory: 

1. Create the `.bna` file. `composer archive create -t dir -n .`
2. Start the Peer Nodes and Chaincode Container (simulated using Docker images): `./restartCDSFabric.sh`
3. Start the Hyperledger Network: `./startComposerFunctions.sh`

Alternatively, you can do `./runall.sh` which will run all scripts necessary.

### Start REST service
Deploy a REST service: `composer-rest-server`. Mark the following options:
```
? Enter the name of the business network card to use: admin@cds-network
? Specify if you want namespaces in the generated REST API: always use namespaces
? Specify if you want to enable authentication for the REST API using Passport: No
? Specify if you want to enable event publication over WebSockets: No
? Specify if you want to enable TLS security for the REST API: No
```

### Start WEB App

From the `/cdsApp` directory:

* Run `ng serve --open`. Web app should be deployed on `locahost:4200`.
