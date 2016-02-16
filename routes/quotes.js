"use strict";

//route for buying stock
const express = require('express');
const router = express.Router();

router.get("/quotes", (req, res) =>
{
	res.render("quotes")
})

module.exports = router;