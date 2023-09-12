### dev

`npm run dev`
port: 3000


### docker locally

make sure this is set:
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: 'standalone',
}

build time around 130s (on private machine)
`docker build -t consumables .`
`docker run -p 3000:3000 consumables`


### deployment

https://nextjs.org/docs/pages/building-your-application/deploying


### azure

portal.azure.com -> login
container registry -> put the image there

go to registry -> get login data from access keys (enable admin if necessary)
`docker login myregistryconsumables.azurecr.io`
`docker tag consumables myregistryconsumables.azurecr.io/consumables`
`docker push myregistryconsumables.azurecr.io/consumables`

container instances -> deploy the image

! on azure, port mapping is not available !


### gcloud

create repository in artifact registry
-> europe-west10-docker.pkg.dev/trainrangenext/consumables

`docker build -t europe-west6-docker.pkg.dev/consumables-398812/consumables/img-v1 .`
`docker tag consumables europe-west6-docker.pkg.dev/consumables-398812/consumables/img-v1`
`docker push europe-west6-docker.pkg.dev/consumables-398812/consumables/img-v1`

Because of authentication issues that actually does not seem to work :/

go to cloud run
-> deploy there, set max instances to 1

exposed port set to 8080 by goolge (automatically done and works). 80 works too.

set HOSTNAME variable to have accurate logs
