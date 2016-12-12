"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var adService_1 = require("../services/adService");
var router = express.Router();
router.post('/add-ad', bodyParser.json(), function (req, res) {
    var adService = new adService_1.AdService();
    var ad = req.body;
    adService.insertAd(ad).then(function (data) {
        console.log(data);
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
router.get('/ad/:id', function (req, res) {
    var adService = new adService_1.AdService();
    adService.getAd(req.param('id')).then(function (data) {
        console.log(data);
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
module.exports = router;
//# sourceMappingURL=apiRouter.js.map