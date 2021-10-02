const express = require("express");

const router = express.Router();
const path = require("path")

const productController = require("../controllers/productController");

router.get("/search", productController.search);

router.get("/detalle-producto", productController.detalleProducto);

router.get("/crear-producto", productController.crearProducto);

router.get("/edicion-producto", productController.edicionProducto);


module.exports = router;