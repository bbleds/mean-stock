//default route
const express = require('express');
const router = express.Router();

router.get("/", (req, res) =>
{
	res.send("Sey Hooligan")
})

module.exports = router;