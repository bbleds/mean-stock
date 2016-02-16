//default route
const express = require('express');
const router = express.Router();
const test = require("../ctrlrs/test");

router.get("/", (req, res) =>
{
	res.render("index")
})


router.get("/example", (req, res) =>
{
	let response = test.getNetflix(req, res)

	//right now this will not work because this is async, so handle with front end code
	res.send(response)
})

module.exports = router;