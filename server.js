//Initialize the express app
const express = require("express");
const app = express();

//Grab the port from our .env
const PORT = process.env.PORT || 8080;

//Add the models for our database
const db = require("./models");

//Use json for sending, and include the stylings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

//Create express app route listeners for html/apis
require("./routes/api-routes.js")(app);
require('./routes/html-routes.js')(app);

//First link to database using sequelize and sync with it
//Tell express app to start listening for these routes on this port
db.sequelize.sync({force: true;}).then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
});

module.exports = app;