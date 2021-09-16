var express = require('express');
var router = express.Router();
var count = require("../controllers/CountController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  count.get(req,res);
});

module.exports = router;
