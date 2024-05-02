const Product = require('../models/productModel');

// Create a new product
exports.createProduct = async (req, res) => {
    if (!req.body.price) {
        return res.status(400).json({ message: 'Price is required' });
    }

    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(400).json({ message: error.message });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
    const products = await Product.find({});
    res.status(200).json(products);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};