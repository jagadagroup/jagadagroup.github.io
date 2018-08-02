var express = require('express');
var router = express.Router();
// var path = require('path');
// var fs = require('fs');
var menu = require('../data/menu.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    omega: 'alpha',
    title: 'Express',
    menu: menu,
    text: 'text'
  });
});

module.exports = router;
