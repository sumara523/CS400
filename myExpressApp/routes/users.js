var express = require('express');
var router = express.Router();

/* GET users listing. */


router.post('/', function(req, res, next) {
  let str = req.body.string;
  let len = str.length;
  res.render('users',  {string: str, length: len});
});

module.exports = router;
