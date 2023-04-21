const {model}= require('mongoose');
const productSchema =require('../schemas/productSchema') // We import the model from mongoose.
const productModel = new model('product', productSchema); // We create a new model with the userSchema.

module.exports = productModel // We export the userModel to use in our controllers.