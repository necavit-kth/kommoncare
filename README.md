# KommonCare

Kommoncare is a [MEAN](https://en.wikipedia.org/wiki/MEAN_%28software_bundle%29) web platform to outsource elder care services and re-engage the communities in taking care of their elders. It was developed as a solution for the [Digital Care challenge](http://smartcities.greenhackathon.com/challenge-stockholm-digital-care/) for the [Smart Cities Green Hackathon in Stockholm, 2016](http://smartcities.greenhackathon.com/).

> KommonCare enables social and environmental sustainability by engaging communities into the care of senior citizens. KommonCare is a web application, a platform for requesting and offering services and creating social gatherings.

**Disclaimer:** this is just a concept, not a fully developed product. The code in the repository consists of all the work that could be carried out in the 24 hours of the hackathon.

## Structure

Inspired by [ragingflame's blog post](http://blog.ragingflame.co.za/2015/4/1/how-i-build-nodejs-applications).

* `./controllers/`: module for the MVC/API controllers. They process data passed by the routes and query the database using `models`, loading view templates if necessary (in the case of the Angular app routes).
* `./doc/`: "documentation" folder.
* `./models/`: module containing all the (`mongoose`) models.
* `./public/`: contains asset files like images, (S)CSS, front-end JavaScript, fonts, etc.
* `./routes/`: routes are responsible for handling traffic and connecting it to the appropriate controllers.
* `./views/`: all the application's view templates.

## Deploy

The deployment of Kommoncare is based on a remote bare Git repository (remote: `deploy`) using a `post-receive` githook. After the code is deployed, it is a good practice to SSH to the server and check that the server is up and running. The server would be accessible at the `kommoncare.davidmr.es` domain.

In order to have a test environment, a second repository (remote: `test`) can be used to deploy the changes to a test server, which will be reachable at the `test-kommoncare.davidmr.es` domain.

> **NOTE:** the remote database connection URL in the production environment configuration file (in the last commit) does not reflect the true URL. Previous versions of the URL (in previous commits) won't work anymore, because the user and database have been removed from MongoLab.

#### Post-receive Git hook

```bash
#!/bin/bash -l
GIT_REPO=$HOME/kommoncare-web.git
PUBLIC_WWW=/data/web/kommoncare

git --work-tree=$PUBLIC_WWW --git-dir=$GIT_REPO checkout -f
pushd $PUBLIC_WWW
npm install
forever restartall
popd
exit
```

#### Nginx config file

KommonCare runs behind an Nginx reverse proxy, allowing to be hosted under a subdomain in a virtual private server in the cloud. To be enable this, create a file under `/etc/nginx/sites-available` with the following contents:

```
server {
  listen 80;
  server_name kommoncare.davidmr.es;

  location / {
    proxy_pass http://127.0.0.1:<KOMMONCARE_PORT>;
  }
```

and symlink it with `ln -s /etc/nginx/sites-available/<FILE> /etc/nginx/sites-enabled/<ENABLED_NAME>` so that Nginx can proxy it. Run `sudo service nginx reload` to reload the configuration and restart the server.

### Browser demo access to the servers

In order to access to Kommoncare from the browser at the `http://kommoncare.com` or `http://test.kommoncare.com` addresses (much nicer for a demo!), execute the following to change your `/etc/hosts` file:

```
echo "kommoncare.davidmr.es kommoncare.com" | sudo tee -a /etc/hosts
echo "test-kommoncare.davidmr.es test.kommoncare.com" | sudo tee -a /etc/hosts
```

Or just add the lines:

```
kommoncare.davidmr.es kommoncare.com
test-kommoncare.davidmr.es test.kommoncare.com
```

at the end of the file manually!
