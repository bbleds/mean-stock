"use strict";
//dependencies
const request = require("request");
const stockItem = require("../models/stockItem");

//module exports object
const exportsObject = {};

exportsObject.getAllStock = (req, res) =>
{
	//query db for all stocks items
		stockItem.find({}, (err,stock)=>
	{
		if (err) throw err
		//respond with all stocks if no error
		res.json(stock)
	})

}

module.exports = exportsObject;