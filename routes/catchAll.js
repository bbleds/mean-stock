'use strict';
//catch all route
const express = require('express');
const router = express.Router();

router.get("/*", (req, res) =>
{
	res.send("<h1>Sorry, page not found!</h1>")
})


module.exports = router;