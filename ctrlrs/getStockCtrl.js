"use strict";
//dependencies
const request = require("request");
const stockItem = require("../models/stockItem");

//module exports object
const exportsObject = {};

exportsObject.getStock = (req, res) =>
{
// res.send in here
// res.send({"test":"butt"})

	// new instance of stock object
	const stockToBuy = new stockItem(
	{
		company:"Apple",
		quantity: 3,
		purchaseStockPrice: 95,
		symbol: "aapl",
		totalPrice: 285
	})

	// save stock to db and send res
	stockToBuy.save(function (err, objectGiven) {
   			 if (err) return console.error(err);
   			 res.send({"status":"Stock saved Successfully"})
 		 });

}

module.exports = exportsObject;