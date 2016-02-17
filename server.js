"use strict";

//Get dependencies
const express = require("express");
const routes = require('./routes/');
const path = require("path")
const mongoose = require("mongoose");
const sassMiddleware = require('node-sass-middleware');
//Initialize app
const app = express();
//set port to environment port or 3000
const PORT =process.env.PORT || 3000;
//set url to mongodb
const MONGODB_URL = "mongodb://localhost:27017/testStocks";

//use jade templating engine
app.set("view engine", "jade");

//use sass compiler via express
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    //this is whitespace indent rather than curly braces
    indentedSyntax: true,
    debug: true,
    outputStyle: 'compressed'
}));

//use public directory for static files
app.use(express.static(path.join(__dirname, '/public')))

//load all routes
app.use(routes);

//mongodb integration
mongoose.connect(MONGODB_URL);

//when mongo is connected
mongoose.connection.on("open", () =>
{
	//Start app on specified port
	app.listen(PORT, () =>
	{
		console.log(`port running on port ${PORT}`);
		console.log(`Connected to mongodb`);
	})

})
