const express = require("express");

const router = express.Router();
const path = require("path")

const productController = require("../controllers/productController");

router.get("/", productController.list);

router.get("/detalle-producto", productController.detalleProducto);

router.get("/crear-producto", productController.crearProducto);
router.post("/crear-producto", productController.store);

router.get("/edicion-producto/:id", productController.edicionProducto);
router.put("/edicion-producto/:id", productController.actualizar);


module.exports = router;