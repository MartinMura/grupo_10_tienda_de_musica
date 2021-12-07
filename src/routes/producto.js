const express = require("express");
const router = express.Router();
const productMulterMiddleware = require('../../middlewares/productMulterMiddleware');
const { check } = require('express-validator');

const validateProduct = [
    check("name").notEmpty().withMessage("Este campo no debe estar vacío").bail().isLength({min:5}).withMessage("Debe contener al menos 5 caracteres"),
    check("description").isLength({min:20}).withMessage("Debe contener al menos 20 caracteres"),
    check("image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExt = [".jpg", ".png", ".jpeg", ".gif"];
        
        if(!file) {
            throw new Error("Tienes que subir una imágen")
        } else {
            let fileExtension = path.extname(file.originalname)
            if(!acceptedExt.includes(fileExtension)){
                throw new Error("Las extensiones de archivo permitidas son " + acceptedExt.join(", "))
            }
        }
        
        return true;
    })
]





const productController = require("../controllers/productController");

router.get("/", productController.list);

router.get("/detalle-producto", productController.detalleProducto);

router.get("/crear-producto", productController.crearProducto);
router.post("/crear-producto", productMulterMiddleware.single("image"), validateProduct, productController.store);

router.get("/edicion-producto/:id", productController.edicionProducto);
router.put("/edicion-producto/:id", productMulterMiddleware.single("image"), productController.actualizar);

router.get("/delete-producto/:id" ,productController.delete);
router.delete("/delete-producto/:id", productController.destroy);

router.get("/search", productController.search)


router.get("/product-detail/:id", productController.productDetail);

module.exports = router;