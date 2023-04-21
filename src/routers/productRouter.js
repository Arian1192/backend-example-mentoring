
const express = require('express'); // We import express.
const { postProduct } = require('../controllers/productController');
const productRouter = express.Router()

productRouter.post('/', postProduct)


module.exports = productRouter;
