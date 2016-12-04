"use strict";
var express = require("express");
var router = express.Router();
router.get('/home', function (req, res) {
    res.render("home.html");
});
module.exports = router;
//# sourceMappingURL=pageRouter.js.map