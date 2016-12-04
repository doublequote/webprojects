"use strict";
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    console.log('toto');
    var testData = {
        firstName: "Jim",
        lastName: "Burger"
    };
    res.send(testData);
});
module.exports = router;
//# sourceMappingURL=apiRouter.js.map