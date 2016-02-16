'use strict';
//route for getting all stocks for portfolio
const express = require('express');
const router = express.Router();
const portfolioCtrl = require("../ctrlrs/portfolioCtrl")

//queries db and sends back data as json to /api/portfolio route
router.get("/api/portfolio", portfolioCtrl.getAllStock);


module.exports = router;