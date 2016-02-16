'use strict';
//Route for getting a specific quote
const express = require('express');
const router = express.Router();
const getQuoteCtrl = require("../ctrlrs/getQuoteCtrl");


router.get("/api/quotes/:symbol", getQuoteCtrl.getQuoteBySymbol)

module.exports = router;