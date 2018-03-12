const express = require("express");

const handlebars = require("express-handlebars");

const path = require("path");

const app = express();

app.engine("html", handlebars({
	partialsDir: __dirname + "/carlink/view",
	extname:".html"
}));
app.set("view engine", "html");

app.use(express.static(__dirname + "/public"));

const home = require("./carlink/routes/HomeRoute");

app.use("/", home);

module.exports = app;