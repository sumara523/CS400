var express = require('express');
var router = express.Router();
const api_helper = require('../API_helper')


router.get('/', (req, res) => {
  api_helper.make_API_call('https://cat-fact.herokuapp.com/facts')
  .then(response => {
      res.render('error', { api_response: JSON.stringify(Object.values(response)[0][0].text) });
  })
  .catch(error => {
    res.render('error', { response: error });
  })
})

module.exports = router;
