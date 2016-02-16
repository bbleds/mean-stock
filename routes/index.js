'use strict';
const express = require('express');
const router = express.Router();

//require route files
const defaultRoute = require("./default")
const quotes = require("./quotes")
const getStock = require("./getStock")
const getPortfolio = require("./getPortfolio")


//Use routes in order of need
router.use(defaultRoute)
router.use(quotes)
router.use(getStock)
router.use(getPortfolio)

module.exports = router;