var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/wished', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/visited', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
