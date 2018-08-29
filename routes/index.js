var express = require('express');
var router = express.Router();
// var path = require('path');
// var fs = require('fs');
var menu = require('../data/menu.json');
var products = require('../data/products.json');
var comments = require('../data/comments.json');
var parallelogram = require('../data/parallelogram.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    menu: menu,
    products: products,
    comments: comments
  });
});

router.get('/products', function(req, res) {
  res.render('products', {
    menu: menu,
    products: products,
    parallelogram: parallelogram
  });
});

router.get('/product', function(req, res) {
  res.render('product', {
    menu: menu,
    products: products,
    parallelogram: parallelogram,
    productId: req.query.id,
    // parallel: parallelogram[+req.query.id]
  });
});

router.get('/about-us', function(req, res) {
  res.render('aboutUs', {
    menu: menu,
    products: products
  });
});


router.get('/research-and-development', function(req, res) {
  res.render('researchDev', {
    menu: menu,
    products: products
  });
});

router.get('/contact-us', function(req, res) {
  res.render('contactUs', {
    menu: menu,
    products: products
  });
});

module.exports = router;
