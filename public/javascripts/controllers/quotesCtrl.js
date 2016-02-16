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
}])