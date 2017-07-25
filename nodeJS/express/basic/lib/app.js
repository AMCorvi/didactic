"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Initialze Express
var app = (0, _express2.default)();

/*
 * Plugin View Engine
 * @returns {HTML} Using Pug(Jade)
 */
app.set("views", _path2.default.join(__dirname, "..", "views"));
app.set("view engine", "pug");

/* Parse request body into json */
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

// Link views to static assests
app.use(_express2.default.static(_path2.default.join(__dirname, "..", "client")));

//Base Route
app.get("/", function (req, res) {
    res.render("index", {
        title: "Everything is Awesome",
        headingMainText: "Oochie Wally wally Oochie Bang Bang"
    });
});

//Login Page Route
app.get("/login", function (req, res) {
    res.send("This is the login page");
});

//Sign-up Page Route
app.get("/signup", function (req, res) {
    res.send("This is the sign-up page");
});

//Spin-up Server
app.listen(80, function () {
    return console.log(" Server is running @ http://localhost");
});