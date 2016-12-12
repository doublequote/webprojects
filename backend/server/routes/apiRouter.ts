import express = require("express");
import bodyParser = require("body-parser");

import {AdService} from '../services/adService';
import {Ad} from '../model/ad/Ad';

let router = express.Router();

router.post('/add-ad', bodyParser.json(), (req, res) => {
  var adService = new AdService();

  var ad = req.body;

  adService.insertAd(ad).then(function(data) {
    console.log(data);
    res.send(data);
  }, function(err) {
    res.send(err);
  });
});

router.get('/ad/:id', (req, res) => {
  var adService = new AdService();

  adService.getAd(req.param('id')).then(function(data) {
    console.log(data);
    res.send(data);
  }, function(err) {
    res.send(err);
  });
});

export = router;
