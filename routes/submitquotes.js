'use strict';
//Route for getting a specific quote
const express = require('express');
const router = express.Router();
const submitQuoteCtrl = require("../ctrlrs/submitQuoteCtrl");


router.get("/quotes/:symbol", submitQuoteCtrl.getQuoteBySymbol)

module.exports = router;