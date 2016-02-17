"use strict";
const mongoose = require("mongoose");

const stockItemSchema = mongoose.model("stockItem", mongoose.Schema({
	company: String,
	quantity: Number,
	purchaseStockPrice: Number,
	symbol: String,
	timestamp: { type: Number, default: Date.now }
}))


module.exports = stockItemSchema;