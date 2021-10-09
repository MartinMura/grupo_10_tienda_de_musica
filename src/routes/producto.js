const express = require("express");
const multer = require("multer")
const router = express.Router();
const path = require("path")

const productController = require("../controllers/productController");

router.get("/", productController.list);

router.get("/detalle-producto", productController.detalleProducto);

router.get("/crear-producto", productController.crearProducto);
router.post("/crear-producto", productController.store);

router.get("/edicion-producto/:id", productController.edicionProducto);
router.put("/edicion-producto/:id", productController.actualizar);

router.get("/delete-producto/:id" ,productController.delete);
router.delete("/delete-producto/:id", productController.destroy)

module.exports = router;