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

From `cds-network/` directory:
1. Run the command: `composer archive create -t dir -n .` 
2. Run `./startComposerFunctions.sh`
3. Start the service for webserver. From the `cdsApp/` directory, run `ng serve --open`. The webapp will be deployed on `localhost:4200`.