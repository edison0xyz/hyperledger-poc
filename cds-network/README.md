# CDS Network Source Code: `cds-network/`

A business network has the following layout:
```
models/
lib/
permissions.acl
package.json
README.md 
```

This folder contains the source code for the business network of CDS network. To deploy this network, you must first create a business network archive file (`.bna`) file. 

From this directory, run the following command:

```
composer archive create -t dir -n .
```