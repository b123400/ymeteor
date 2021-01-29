# Parsing Swissmedic and Pharmnet with Meteor
#### Ubuntu dependencies for puppeteer
 libx11-xcb1
 libx11
 libx11-dev
 libXcomposite
 libxcomposite-dev
 libxcursor-dev
 libxdamage-dev
 libxi-dev
 libxtst-dev
 libnss3-dev
 libcups2-dev
 libxss-dev
 libxrandr-dev
 libatk1.0-dev
 libatk-bridge2.0-dev
 libpangocairo
 libpangocairo-1.0
 libgtk-3-dev

#### Install Meteor on Linux
`curl https://install.meteor.com/ | sh`

#### Install dependencies
$ meteor npm install

#### Run GUI at localhost:3000 with pharmnet data
$ meteor --once --settings pharma.json

#### Import HPC, DHPC and Chargenrückrufe from Swissmedic.ch
$ meteor --once --settings swissmedic.json

#### Import from Pharmnet
$ meteor --once --settings atc.json   


### Import from drugshortage

$ meteor --settings drugshortage.json --once


### Import from pei.de
$ meteor --settings pei.json  --once

### Generate Schemas
$ meteor --settings generate-schema.json --once\
$ cd public/schema
 
Note: To generate the correct Schema files, you will need the latest version of the output files.

#### Check files
$ cd public/exports

#### Check files in Browser
Open http://localhost:3000 in the browser

#### Debugging
$ METEOR_PROFILE=1 METEOR_LOG=debug meteor --verbose

### Missing ATC-Code
./atc.json

set "loadMissing":true
set "Missing" => Missing code in array

### Convert json2csv
/home/zeno/.nvm/versions/node/v11.12.0/bin/json2csv
