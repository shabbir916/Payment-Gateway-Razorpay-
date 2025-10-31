const productModel = require("../models/product.model");

async function createProduct(req, res) {
  const {
    image,
    title,
    description,
    price: { amount, currency },
  } = req.body;

  try {
    const product = await productModel.create({
      image,
      title,
      description,
      price: { amount, currency },
    });

    return res.status(201).json({
      message: "Product Created successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      error: error.message,
    });
  }
}

async function getProduct(req, res) {
  try {
    const product = await productModel.findOne();
    return res.status(200).json({
      message: "Product fetched Successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Somethig Went Wrong",
      error: error.message,
    });
  }
}

module.exports = {
  createProduct,
  getProduct,
};
