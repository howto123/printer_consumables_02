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

`docker tag consumables europe-west10-docker.pkg.dev/trainrangenext/consumables/consumables`
`docker push europe-west10-docker.pkg.dev/trainrangenext/consumables/consumables`

Because of authentication issues that actually does not seem to work :/

go to cloud run
-> deploy there
