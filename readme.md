## Mercury URL Parser for Zeit Now

### Usage
https://now-mercury-parser.da-eh.now.sh/api/parser?url=<SOME URL>

### Deployment
Using now-cli or just by pushing to the master repository.

### Custom Extractor
1. Add custom extractor in github:dehlen/mercury-parser
2. run yarn install && yarn run build
3. Push the new dist folder
4. Update the dependency in this project