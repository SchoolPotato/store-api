const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const updateProduct = async (req, res) => {
    let bool = req.query.completed === 'true';
    let name = () => {
        if(req.query.name) {
            return req.query.name;
        } else {
            return getProduct(req.params.id).name;
        }
    }
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, {completed: bool, name: name()});
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({product});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

module.exports = {
    getAllProducts,
    updateProduct,
    deleteProduct,
    createProduct,
    getProduct
}