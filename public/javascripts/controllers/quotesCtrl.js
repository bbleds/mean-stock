"use strict";
app.controller("quotesCtrl", ["$http", "buyStocksFactory",  function($http, $buyStocksFactory)
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

	//saves/buys stock to mongodb and returns message if successful
	self.getStock = $buyStocksFactory.getStock;
	self.getStockSuccess = $buyStocksFactory.status;

}])