'use strict';
const express = require('express');
const router = express.Router();

//require route files
const defaultRoute = require("./default")
const quotes = require("./quotes")


//Use routes in order of need
router.use(defaultRoute)
router.use(quotes)

module.exports = router;