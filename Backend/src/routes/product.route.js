const express = require("express");
const router = express.Router();
const {createProduct,getProduct} = require("../controllers/product.Controller")

router.post("/",createProduct)
router.get("/get-item",getProduct)


module.exports = router