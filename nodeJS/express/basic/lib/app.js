"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _UserModel = require("./models/UserModel.js");

var _UserModel2 = _interopRequireDefault(_UserModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Initialze Express
var app = (0, _express2.default)();

_mongoose2.default.connect("mongodb://localhost/expressBasic");

var db = _mongoose2.default.connection;
db.on("error", function (err) {
    return console.error.bind(console, err);
});
db.once("open", function () {
    return console.log("Server made successful connection to the database. ");
});

// Bring in database models


/*
 * Plugin View Engine
 * @returns {HTML} Using Pug(Jade)
 */
app.set("views", _path2.default.join(__dirname, "..", "views"));
app.set("view engine", "pug");

/* Parse request body to json and URL encoded data*/
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
    res.render("login");
});

//Sign-up Page Route
app.get("/signup", function (req, res) {
    res.render("signup");
});

// Post Submition from sign-in
app.post("/signup", function (req, res) {
    var user = new _UserModel2.default();

    user.email = req.body.email;
    user.password = req.body.password;
    console.log(user.password);

    user.save(function (err) {
        if (err) {
            console.error(err);
            return res.redirect("/signup");
        }

        delete user.password;
        res.render("success", {
            message: user.email + " SignUp was successful"
        });
    });
});

//Spin-up Server
app.listen(80, function () {
    return console.log("\n\nServer is running @ http://localhost");
});