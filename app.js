var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.json());

app.get("/", function (req, res) {
	res.render("home");
});

require("./cron-log");

// Start app!
app.listen(80, () => {
	console.log("\n\n\n=== STARTING APP ===");
	console.log("Current time: " + new Date().toLocaleString());
	console.log("listening on port 80\n\n");
});
