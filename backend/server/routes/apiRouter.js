"use strict";
var express = require("express");
var adService_1 = require("../services/adService");
var Ad_1 = require("../model/ad/Ad");
var router = express.Router();
router.get('/add-ad', function (req, res) {
    var adService = new adService_1.AdService();
    var ad = new Ad_1.Ad();
    ad.title = "first ad";
    ad.description = "description test";
    adService.insertAd(ad).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
router.get('/ad', function (req, res) {
    var adService = new adService_1.AdService();
    adService.getAd('ad_1480868915415').then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
});
module.exports = router;
//# sourceMappingURL=apiRouter.js.map