"use strict";

//route for buying stock
const express = require('express');
const router = express.Router();

router.get("/quotes", (req, res) =>
{
	res.send("Lets buy some GUUUUDDDDZZZZ")
})

module.exports = router;