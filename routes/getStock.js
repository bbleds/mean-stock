'use strict';
//route for saving/buying stocks
const express = require('express');
const router = express.Router();
const getStockCtrl = require("../ctrlrs/getStockCtrl")

//save data via mongodb
router.post("/api/getStock", getStockCtrl.getStock);


module.exports = router;