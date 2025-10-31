const express = require("express");
const productRoutes = require("./routes/product.route")
const paymentRoutes = require("./routes/payment.route")
const cors = require("cors");
const path = require("path")


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"../public")));

app.use("/api/product",productRoutes);
app.use("/api/payments",paymentRoutes)

app.get("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"../publicindex.html"));
});

module.exports = app;