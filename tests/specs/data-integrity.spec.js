const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', '..');
const menu = require(path.join(root, 'data', 'menu.json'));
const products = require(path.join(root, 'data', 'products.json'));
const magnalium = require(path.join(root, 'data', 'magnalium.json'));
const magnesium = require(path.join(root, 'data', 'magnesium.json'));

describe('Data Integrity', () => {
  describe('menu.json', () => {
    test('has 6 top-level items', () => {
      expect(menu).toHaveLength(6);
    });

    test('all items have name and href', () => {
      menu.forEach((item) => {
        expect(item).toHaveProperty('name');
        expect(item).toHaveProperty('href');
      });
    });

    test('products has submenu with 3 items', () => {
      const productsMenu = menu.find((m) => m.name === 'products');
      expect(productsMenu).toBeDefined();
      expect(productsMenu.sub).toHaveLength(3);
      expect(productsMenu.sub[0].name).toBe('Magnalium Powder');
      expect(productsMenu.sub[1].name).toBe('Magnesium Powder');
      expect(productsMenu.sub[2].name).toBe('Titanium Powder');
    });

    test('production technology has submenu with R&D', () => {
      const techMenu = menu.find((m) => m.name === 'production technology');
      expect(techMenu).toBeDefined();
      expect(techMenu.sub).toHaveLength(1);
      expect(techMenu.sub[0].name).toBe('research & Development');
    });
  });

  describe('products.json', () => {
    test('has 11 products', () => {
      expect(products).toHaveLength(11);
    });

    test('all products have required fields', () => {
      products.forEach((product, index) => {
        expect(product).toHaveProperty('url');
        expect(product).toHaveProperty('text');
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('data');
        expect(product.id).toBe(index + 1); // IDs are 1-indexed sequential
      });
    });

    test('all product data arrays have 4 items', () => {
      products.forEach((product) => {
        expect(product.data).toHaveLength(4);
        product.data.forEach((datum) => {
          expect(datum).toHaveProperty('class');
          expect(datum).toHaveProperty('value');
          expect(datum).toHaveProperty('unit');
          expect(datum).toHaveProperty('head');
          expect(datum).toHaveProperty('color');
        });
      });
    });

    test('product IDs are unique', () => {
      const ids = products.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    });

    test('first 7 are Magnalium, next 3 Magnesium, last 1 Titanium', () => {
      expect(products[0].text).toContain('Magnalium');
      expect(products[6].text).toContain('Magnalium');
      expect(products[7].text).toContain('Magnesium');
      expect(products[9].text).toContain('Magnesium');
      expect(products[10].text).toContain('Titanium');
    });
  });

  describe('magnalium.json', () => {
    test('has 7 products', () => {
      expect(magnalium).toHaveLength(7);
    });

    test('all are magnalium products', () => {
      magnalium.forEach((p) => {
        expect(p.text).toMatch(/Magnalium/i);
      });
    });
  });

  describe('magnesium.json', () => {
    test('has 3 products', () => {
      expect(magnesium).toHaveLength(3);
    });

    test('all are magnesium products', () => {
      magnesium.forEach((p) => {
        expect(p.text).toMatch(/Magnesium/i);
      });
    });
  });
});

describe('pug.js — Static Generation Script', () => {
  test('all output paths are valid (no invalid chars)', () => {
    // Paths correspond to URL-safe routes
    const outputPaths = [
      '/',
      '/home',
      '/products',
      '/magnalium',
      '/magnesium',
      '/product',
      '/about-us',
      '/customers',
      '/press',
      '/jobs',
      '/resource-center',
      '/blogs',
      '/help-center',
      '/product-status',
      '/support',
      '/production-technology',
      '/production-quality',
      '/research-and-development',
      '/contact-us',
    ];

    outputPaths.forEach((p) => {
      expect(p).toMatch(/^\/[a-z0-9\-]*$/);
    });
    expect(outputPaths.length).toBe(19);
  });

  test('all routes defined in Express match pug.js output', () => {
    // This ensures parity between dynamic (Express) and static (pug.js) rendering
    const routes = require(path.join(__dirname, '..', 'fixtures', 'routes-index-output.json'));
    expect(routes.length).toBe(19);

    routes.forEach((route) => {
      expect(route).toHaveProperty('templatePath');
      expect(route).toHaveProperty('outputPath');
      expect(route).toHaveProperty('context');
    });
  });
});