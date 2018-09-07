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

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {
    menu: menu,
    products: products,
    comments: comments
  });
});

router.get('/products', function(req, res) {
  res.render('productum', {
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

router.get('/customers', function(req, res) {
  res.render('customers', {
    menu: menu,
    products: products
  });
});

router.get('/press', function(req, res) {
  res.render('press', {
    menu: menu,
    products: products
  });
});

router.get('/jobs', function(req, res) {
  res.render('jobs', {
    menu: menu,
    products: products
  });
});

router.get('/resource-center', function(req, res) {
  res.render('resourceCenter', {
    menu: menu,
    products: products
  });
});

router.get('/blogs', function(req, res) {
  res.render('blogs', {
    menu: menu,
    products: products
  });
});

router.get('/help-center', function(req, res) {
  res.render('helpCenter', {
    menu: menu,
    products: products
  });
});

router.get('/product-status', function(req, res) {
  res.render('productStatus', {
    menu: menu,
    products: products
  });
});

router.get('/support', function(req, res) {
  res.render('support', {
    menu: menu,
    products: products
  });
});

router.get('/production-technology', function(req, res) {
  res.render('productionTechnology', {
    menu: menu,
    products: products
  });
});

router.get('/production-quality', function(req, res) {
  res.render('productionQuality', {
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
