const express = require("express");

const router = express.Router();
const path = require("path")

const mainController = require("../controllers/mainController.js");


router.get("/", mainController.index);

router.post("/", mainController.index);

router.get("/login", mainController.login);

router.get("/register", mainController.register);

router.get("/shopping-list", mainController.shoppingList);

router.get("/detalle-producto", mainController.detalleProducto);

router.get("/crear-producto", mainController.crearProducto);

router.get("/edicion-producto", mainController.edicionProducto);





module.exports = router;