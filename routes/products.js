
const express = require('express');
const router = express.Router();
const mainController= require('../controllers/products');

router.route('/').get(mainController.getAllProducts);

router.route('/test').get(mainController.getAllProductsTest);


module.exports = router;
