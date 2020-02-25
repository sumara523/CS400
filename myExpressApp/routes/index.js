var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ps3', function(req, res, next) {
  res.render('index',  {string: 'I am a backend master'});
});

module.exports = router;
