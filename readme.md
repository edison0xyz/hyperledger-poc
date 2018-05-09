# Credit Default Swap (CDS) Proof-of-Concept

Proof of concept is developed on `hyperledger fabric v1.1`. Issues with the minor upgrade at the moment, still in the middle of fixing it. 

Structure:

* `cds-network/`  : Source code for Hyperledger Fabric Network
* `production/`   : Production-ready deployment of `cds-network/`
* `fabric-tools/` : Required scripts downloaded from 
* `cdsApp/`       : Web application

## Getting Started

Before deploying the application, you must first ensure that the necessary pre-requisites are installed. 

Tested to be running on: 
* Composer runtime version: 0.19.4
* Hyperledger Fabric v1.1
* Typescript 2.7.2
* Angular v. 5.2.7
* Node 10.0.0

* Angular CLI: 1.6.7

## Installation

Before compiling and running the source code, we will require an environment with the following: 
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
    * Install angular: `npm install angular`
    * Install angular CLI tool: `npm install angular`
    * (Optional) Hyperledger Playground to graphically create business network: `npm install -g composer-playground`
5. Install Hyperledger Fabric by running the following commands:
```
mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz

cd ~/fabric-dev-servers

./downloadFabric.sh
```
5. Create peer admin card. This admin card is required for deployment of cds-network: 
    * `~/fabric-dev-servers/createPeerAdminCard.sh`

## Deployment

To deploy, you must first start the fabric network, start REST service and then launch the web app. 

There are two ways to deploy. One, you can go run from my production-environment within `production/`. 

Two, if you wish to compile the network yourself, navigate to `cds-network/` directory and following [these](cds-network/readme.md) instructions.

### Run from `production/`

1. Go to `production/` and run `./startComposerFunctions.sh`. Refer to [here](production/readme.md) for more documentation.
2. Start the service for webserver. From the `cdsApp/` directory, run `ng serve --open`. The webapp will be deployed on `localhost:4200`.

## General Utility
General utility functions are included in `\utility-tools`. These tools help to automate manual tasks. However, if you run into problem, I recommend running the commands individually.
* `restartCDSFabric.sh`: Restarts fabric network
* `runall.sh`: Restarts docker images and fabric network. Then start composer function from `../production`.

## Demo Videos

To see the CDS application in action:
* Part A: https://youtu.be/Vhy8evJL2qQ
* Part B: https://youtu.be/pBaPj_59nlg 