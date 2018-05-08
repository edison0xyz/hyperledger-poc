# Credit Default Swap (CDS) Proof-of-Concept

Proof of concept is developed on `hyperledger fabric v1.1`. Issues with the minor upgrade at the moment, still in the middle of fixing it. 

Structure:

* cds-network: codebase for hyperledger
* fabric-tools: config files downloaded from hyperledger, but edited for cds-network
* cdsApp: Web application to view transactions. Developed on Angular 5.


## Getting Started

Before deploying the application, you must first ensure that the necessary pre-requisites are installed. 


## Installation

Before compiling and running the source code, we will require the following environments:
* Operating Systems: Ubuntu Linux 14.04 / 16.04 LTS (both 64-bit), or Mac OS 10.12
* Docker Engine: Version 17.03 or higher
* Docker-Compose: Version 1.8 or higher
* Node: 8.9 or higher (note version 9 is not supported)
* npm: v5.x
* git: 2.9.x or higher
* Python: 2.7.x

If you do not have any of the tools above, follow the instructions below:

1. Install NPM
  * Mac: `brew install node`
  * Other OS: [Instructions](https://www.npmjs.com/get-npm)
2. Install the pre-requisites for Hyperledger Composer: [Instructions for Ubuntu and Mac OS](https://hyperledger.github.io/composer/latest/installing/installing-prereqs)
3. Install the tools needed for developmental platform:
  * Essential Composer CLI Tools: `npm install -g composer-cli`
  * Utility for running REST Server on machine: `npm install -g composer-rest-server`
  * Install generator (needed for application assets): `npm install -g generator-hyperledger-composer`
  * (Optional) Hyperledger Playground to graphically create business network: `npm install -g composer-playground`
4. Create peer admin card. Check that it is placed in the `/tmp` folder (default behavior).
  * `~/fabric-dev-servers/createPeerAdminCard.sh`


2. Angular: 
  * Install angular: `npm install angular`
  * Install angular CLI tools: `npm install -g @angular/cli`

3. Install the development environment by following these steps: `https://hyperledger.github.io/composer/latest/installing/development-tools`




## Deploying

To deploy, you must first start the fabric network, start REST service and then launch the web app. 

### Prerequisites:

PeerAdmin must be generated in `/tmp` file. From `~/fabric-dev-servers/`, run `./createPeerAdminCard.sh`.

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



---

composer network install --card PeerAdmin@hlfv1 -a cds-network@0.0.1.bna
