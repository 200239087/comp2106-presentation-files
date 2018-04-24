const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'TOP | Mario Fan Shop'
   });
});

/* GET product detail page. */
router.get('/product01', function(req, res, next) {
  res.render('product01', { 
    title: 'Mariokart Wii Complete Package | Mario Fan Shop'
  });
});

/* GET in-cart detail page. */
router.get('/cart', function(req, res, next) {
  res.render('cart', { 
    title: 'Cart | Mario Fan Shop'
   });
});

/* GET enter-customerinfo page. */
router.get('/orderform', function(req, res, next) {
  res.render('orderform', { 
    title: 'Order Form | Mario Fan Shop'
  });
});

/* GET PayPal page. */
router.get('/paypal-top', function(req, res, next) {
  res.render('paypal-top', { 
    title: 'Pay by PayPal | Mario Fan Shop'
  });
});

module.exports = router;
