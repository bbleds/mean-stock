"use strict";

//dependencies

const request = require("request");

//module exports object
const exportObj = {}

exportObj.getNetflix = (req,res) =>
{
	let URL = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=NFLX";
	request.get(URL, (err, request, body) =>
	{
		if(err) throw err;
		console.log("body is");
		let parsed = JSON.parse(body);
		console.log(parsed);
		return parsed
	})
}



module.exports = exportObj;