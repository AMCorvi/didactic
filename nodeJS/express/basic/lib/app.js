"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/", function (req, res) {
    res.send("These violent delights have violent ends");
});

app.listen(3000, function () {
    return console.log("Server started on Port :3000");
});
