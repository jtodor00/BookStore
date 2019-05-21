const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get("/shop", (req, res, next) => {
   const products = adminData.products;
   res.render('shop', { prods: products, docTitle: 'shop', path: '/shop', hasProduct: products.length > 0 });
});

module.exports = router;