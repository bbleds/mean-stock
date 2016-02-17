"use strict";
app.factory("buyStocksFactory", ["$http", ($http) =>
{
	const factoryExports = {};


// NEXT STEP -> when you send request here, if stock already exists when you buy, then have put request, else have post request
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