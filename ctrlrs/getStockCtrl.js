"use strict";
//dependencies
const request = require("request");
const stockItem = require("../models/stockItem");

//module exports object
const exportsObject = {};

exportsObject.getStock = (req, res) =>
{
	console.log("req.body below");

	const company = req.params.company;
	const quantity = req.params.quantity;
	const purchaseStockPrice = req.params.purchaseStockPrice;
	const symbol = req.params.symbol;

	// new instance of stock object
	const stockToBuy = new stockItem(
	{
		"company": company,
		"quantity": quantity,
		"purchaseStockPrice": purchaseStockPrice,
		"symbol": symbol
	})

	// save stock to db and send res
	stockToBuy.save(function (err, objectGiven) {
   			 if (err) return console.error(err);
   			 res.send({"status":"Stock saved Successfully"})
 		 });

}

module.exports = exportsObject;