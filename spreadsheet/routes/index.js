var express = require('express');
var router = express.Router();

router.get('/', function( req, res, next ){
  res.render('home', {title: 'index', layout: 'home' });
});

module.exports = router;
