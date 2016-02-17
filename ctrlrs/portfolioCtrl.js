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

exportsObject.updateStock = (req, res) =>
{
	console.log(req.params);
	//if selling stock subtract qty, if buy increase qty

	//variables to query db
		//the conditions to be matched to select stock to update
		const conditions = {"_id": req.params.stockId};
		//the operation to be executed on the matched stock, in this case it is a subtraction operation (increment by negative quantity passed in) or addition operation
		let update;
		req.params.operation === "buy" ? update = {$inc: {"quantity" : +req.params.qty}} : update = {$inc: {"quantity" : -req.params.qty}}
		//only target one item in db
		const options = {"multi": false}

	//update db for sold stocks
	stockItem.update(conditions, update, options, (err, numStocksChanged) => {
		if(err) throw err

		//send success message to client if data was updated
		res.send({"status":"success", "stocksChanged": numStocksChanged})

	})


}

module.exports = exportsObject;