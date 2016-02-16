"use strict";
app.controller("portfolioCtrl", ["$http", function($http)
{
	const self = this;

	//get data from mongo for each stock and output the various components, executes immediately
	self.stocks = (() =>
	{
		$http.get("/api/portfolio")
		.then((data)=>
		{
			self.stocksArray = data.data;
		})
	})();

}])