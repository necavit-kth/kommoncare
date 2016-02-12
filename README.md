# kommoncare

Kommoncare is a [MEAN](https://en.wikipedia.org/wiki/MEAN_%28software_bundle%29) web platform to outsource elder care services and re-engage the communities in taking care of their elders.

## Structure

Inspired by [ragingflame's blog post](http://blog.ragingflame.co.za/2015/4/1/how-i-build-nodejs-applications).

* `./controllers/`: module for the MVC/API controllers. They process data passed by the routes and query the database using `models`, loading view templates if necessary (in the case of the Angular app routes).
* `./doc/`: "documentation" folder.
* `./models/`: module containing all the (`mongoose`) models.
* `./public/`: contains asset files like images, (S)CSS, front-end JavaScript, fonts, etc.
* `./routes/`: routes are responsible for handling traffic and connecting it to the appropriate controllers.
* `./views/`: all the application's view templates.

## Deploy

The deployment of Kommoncare is based on a remote bare Git repository (remote: `deploy`) using a `post-receive` githook. After the code is deployed, it is a good practice to SSH to the server and check that the server is up and running. The server will be accessible at the `kommoncare.davidmr.es` domain.

In order to have a test environment, a second repository (remote: `test`) can be used to deploy the changes to a test server, which will be reachable at the `test-kommoncare.davidmr.es` domain.

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
