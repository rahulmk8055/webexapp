var express = require('express');
var router = express.Router();
let date_ob = new Date();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.json(
    "I received your POST request. This is what was sent "+req.body.post
  );

});

module.exports = router;
