"use strict";
app.controller("quotesCtrl", ["$http", function($http)
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
			console.log(self.stockInfo);
		})
	}

	//saves/buys stock to mongodb
	self.getStock = (company, quantity, purchasePrice, symbol) =>
	{
		//get quote from api
		$http.post(`/api/getStock/${company}/${quantity}/${purchasePrice}/${symbol}`)
		.then((data)=>
		{
			self.getStockSuccess = data;
		})
	}
}])