var express = require('express');
var router = express.Router();
var count = require("../controllers/CountController");


router.post('/', function(req, res) {
    count.save(req, res);
  });
  

  module.exports = router;