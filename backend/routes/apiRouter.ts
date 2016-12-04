import express = require("express")

let router = express.Router();
router.get('/', (req, res) => {
  console.log('toto');
    let testData = {
        firstName: "Jim",
        lastName: "Burger"
    }
    res.send(testData);
});

export = router;
