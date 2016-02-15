//Get dependencies
const express = require("express");
//Initialize app
const app = express();
//set port to environment port or 3000
const PORT =process.env.PORT || 3000;


//default route
app.get("/", (req, res) =>
{
	res.send("Sey HAY")
})


//Start app on specified port
app.listen(PORT, () =>
{
	console.log(`port running on port ${PORT}`);
})