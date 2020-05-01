var express = require('express');
var router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://cat-fact.herokuapp.com/facts';

/* GET api listing. */
// router.get('/', (req, res) => {
//   api_helper.make_API_call('https://cat-fact.herokuapp.com/facts')
//   .then(response => {
//       res.send({ api_response: JSON.stringify(Object.values(response)[0][0].text) });
//   })
//   .catch(error => {
//     res.send({ response: error });
//   })
// });

//Get all posts
router.get('/', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});
module.exports = router;

