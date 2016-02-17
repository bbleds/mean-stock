"use strict";
app.factory("buyStocksFactory", ["$http", ($http) =>
{
	const factoryExports = {};


	//submit stock to db for storing
	factoryExports.getStock = (company, quantity, purchasePrice, symbol) =>
	{
		//get quote from api
		$http.post(`/api/getStock/${company}/${quantity}/${purchasePrice}/${symbol}`)
		.then((data)=>
		{

		})
	}

	return factoryExports;
}])