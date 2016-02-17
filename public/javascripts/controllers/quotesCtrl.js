"use strict";
app.controller("quotesCtrl", ["$http",  function($http)
{
	const self = this;

	//gets quote for a stock
	self.getQuote = (sym) =>
	{
		//get quote from api
		$http.get(`/api/quotes/${sym}`)
		.then((data)=>
		{
			self.stockInfo = data;
		})
	}

	//saves/buys stock to mongodb and returns message if successful
	self.getStock = (company, quantity, purchasePrice, symbol) =>
	{
		//get quote from api
		$http.post(`/api/getStock/${company}/${quantity}/${purchasePrice}/${symbol}`)
		.then((data)=>
		{
			//display success message to user
			self.getStockSuccess	= data;
		})
	}

}])