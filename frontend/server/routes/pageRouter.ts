import express = require("express")

let router = express.Router();

router.get('/home', (req, res) => {
  res.render("home.html");
});

router.get('/place-ad', (req, res) => {
  res.render("place-add.html");
});

export = router;
