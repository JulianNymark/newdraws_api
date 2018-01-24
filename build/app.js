"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var router = express.Router();
app.get('/draws', function (req, res) {
    res.json({
        draws: ['some_draw.png']
    });
});
var port = 8000;
app.listen(port);
console.log("listening on port: " + port);
