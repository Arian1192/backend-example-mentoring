const productModel = require('../models/productModel');


// Definimos el Crud

const postProduct = async ( req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.status(201).json({product})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    postProduct
}