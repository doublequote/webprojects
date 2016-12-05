import express = require("express");

import {AdService} from '../services/adService';
import {Ad} from '../model/ad/Ad';

let router = express.Router();

router.get('/add-ad', (req, res) => {
  var adService = new AdService();

  var ad = new Ad();
  ad.title = "first ad";
  ad.description = "description test";

  adService.insertAd(ad).then(function(data) {
    res.send(data);
  }, function(err) {
    res.send(err);
  });
});

router.get('/ad', (req, res) => {
  var adService = new AdService();

  adService.getAd('ad_1480868915415').then(function(data) {
    res.send(data);
  }, function(err) {
    res.send(err);
  });
});

export = router;
