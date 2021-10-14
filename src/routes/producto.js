const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        
    cb(null, path.join(__dirname, "../../public/images/images-productos"));

    },
    filename: (req, file, cb) => {
        let imageName = "producto-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName)
    }
});

let fileUpload = multer({ storage })


const productController = require("../controllers/productController");

router.get("/", productController.list);

router.get("/detalle-producto", productController.detalleProducto);

router.get("/crear-producto", productController.crearProducto);
router.post("/crear-producto", fileUpload.single("image"), productController.store);

router.get("/edicion-producto/:id", productController.edicionProducto);
router.put("/edicion-producto/:id", fileUpload.single("image"), productController.actualizar);

router.get("/delete-producto/:id" ,productController.delete);
router.delete("/delete-producto/:id", productController.destroy)

module.exports = router;