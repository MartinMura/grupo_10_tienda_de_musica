const express = require('express');
const router = express.Router();
const apiProducts = require("../../controllers/ApiControllers/apiProductsController")



router.get("/api/products", apiProducts.list);

router.get("/api/products/:id", apiProducts.productApiDetail)


module.exports = router;