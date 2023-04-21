const {Schema} = require('mongoose'); // We import the Schema from mongoose.

const productSchema = new Schema({
    title: {type:String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
    image: {type:String},
})

module.exports = productSchema; // We export the productSchema to use in our models.