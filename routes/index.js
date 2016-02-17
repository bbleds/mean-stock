'use strict';
const express = require('express');
const router = express.Router();

//require route files
const defaultRoute = require("./default")
const quotes = require("./quotes")
const getStock = require("./getStock")
const portfolio = require("./portfolio")


//Use routes in order of need
router.use(defaultRoute)
router.use(quotes)
router.use(getStock)
router.use(portfolio)

module.exports = router;