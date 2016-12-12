import express = require("express")

let router = express.Router();

router.get('/home', (req, res) => {
  res.render("home.html");
});

router.get('/ad/*', (req, res) => {
  res.render("ad.html");
});

export = router;
