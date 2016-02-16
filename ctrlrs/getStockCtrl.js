"use strict";
//dependencies
const request = require("request");

//module exports object
const exportsObject = {};

exportsObject.getStock = (req, res) =>
{
// res.send in here
res.send({"test":"butt"})
}

module.exports = exportsObject;