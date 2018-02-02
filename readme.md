# Credit Default Swap (CDS) Proof-of-Concept

Proof of concept is developed on `hyperledger fabric v1.0`. 

Structure: 
* cds-network: codebase for hyperledger
* fabric-tools: config files downloaded from hyperledger, but edited for cds-network



### Running composer-network 

PeerAdmin must be generated in /tmp file. Enroll secret and pw can be anything. 



Run from `/cds-network` directory. 

Firstly, create the `.bna` file. 
```
composer archive create -t dir -n .
```

The following codes first generates a network card, and attach itself to the hyoerledger-network. 

```

composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName cds-network

composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile cds-network@0.0.1.bna --file networkadmin.card

composer card import --file networkadmin.card

composer network ping --card admin@cds-network # test network

```