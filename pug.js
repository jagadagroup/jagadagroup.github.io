const fs = require('fs');
const pug = require('pug');

const menu = require('./data/menu.json');
const products = require('./data/products.json');
const magnalium = require('./data/magnalium.json');
const magnesium = require('./data/magnesium.json');
const comments = require('./data/comments.json');

const VIEW_PREFIX = 'views'
function writeToDisk(template, path, context) {
  path = '.' + path;
  if (!/\/$/.test(path)) {
    path += '/';
  }
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, {recursive: true});
  }
  const compiledFunction = pug.compileFile(`${VIEW_PREFIX}/${template}`);
  fs.writeFileSync(`${path}index.html`, compiledFunction(context));
  ;
}

writeToDisk('index.pug', '/', {
  menu: menu,
  products: products,
  comments: comments
});
writeToDisk('index.pug', '/home', {
  menu: menu,
  products: products,
  comments: comments
});
writeToDisk('productum.pug', '/products', {
  menu: menu,
  products: products
});
writeToDisk('productum.pug', '/magnalium', {
  menu: menu,
  products: magnalium
});
writeToDisk('productum.pug', '/magnesium', {
  menu: menu,
  products: magnesium
});
writeToDisk('product.pug', '/product', {
  menu: menu,
  products: products,
  productId: 1,
});
writeToDisk('aboutUs.pug', '/about-us', {
  menu: menu,
  products: products
});
writeToDisk('customers.pug', '/customers', {
  menu: menu,
  products: products
});
writeToDisk('press.pug', '/press', {
  menu: menu,
  products: products
});
writeToDisk('jobs.pug', '/jobs', {
  menu: menu,
  products: products
});
writeToDisk('resourceCenter.pug', '/resource-center', {
  menu: menu,
  products: products
});
writeToDisk('blogs.pug', '/blogs', {
  menu: menu,
  products: products
});
writeToDisk('helpCenter.pug', '/help-center', {
  menu: menu,
  products: products
});
writeToDisk('productStatus.pug', '/product-status', {
  menu: menu,
  products: products
});
writeToDisk('support.pug', '/support', {
  menu: menu,
  products: products
});
writeToDisk('productionTechnology.pug', '/production-technology', {
  menu: menu,
  products: products
});
writeToDisk('productionQuality.pug', '/production-quality', {
  menu: menu,
  products: products
});
writeToDisk('researchDev.pug', '/research-and-development', {
  menu: menu,
  products: products
});
writeToDisk('contactUs.pug', '/contact-us', {
  menu: menu,
  products: products
});
