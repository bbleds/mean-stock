"use strict";
app.controller("portfolioCtrl", ["$http", function($http)
{
	const self = this;

	//get data from mongo for each stock and output the various components, executes immediately
	self.stocks = (() =>
	{

		//get stock data
		$http.get("/api/portfolio")
		.then((data)=>
		{
			self.stocksArray = data.data;

			//initialize stock value
			self.totalPortfolioValue=0;

			//total each (stock * qty) and add result to totalPortfolioValue
			data.data.map((item, index)=>{
				self.totalPortfolioValue += (item.purchaseStockPrice * item.quantity);
			})

		})
	})();

}])