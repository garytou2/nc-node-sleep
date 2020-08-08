var cron = require("node-cron");

cron.schedule("0,30 * * * * *", printTime);

function printTime() {
	var date = new Date().toLocaleString();
	console.log(date);
}
