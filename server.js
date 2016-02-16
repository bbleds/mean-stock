"use strict";

//Get dependencies
const express = require("express");
const routes = require('./routes/');
const path = require("path")
//Initialize app
const app = express();
//set port to environment port or 3000
const PORT =process.env.PORT || 3000;

//use jade templating engine
app.set("view engine", "jade");

//use public directory for static files
app.use(express.static(path.join(__dirname, '/public')))

//load all routes
app.use(routes);


//Start app on specified port
app.listen(PORT, () =>
{
	console.log(`port running on port ${PORT}`);
})


//export app to be accessed within routes directory
module.exports = app;
