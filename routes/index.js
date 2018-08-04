var express = require('express');
var router = express.Router();
// var path = require('path');
// var fs = require('fs');
var menu = require('../data/menu.json');
var products = require('../data/products.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    menu: menu,
    products: products
  });
});

module.exports = router;
