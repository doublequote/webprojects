import express = require("express")

let router = express.Router();

router.get('/home', (req, res) => {
  res.render("home.html");
});

export = router;
