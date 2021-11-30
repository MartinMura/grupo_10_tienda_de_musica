const express = require("express");
const router = express.Router();

const {check} = require("express-validator");
const path = require("path");
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');
const userMulterMiddleware = require('../../middlewares/userMulterMiddleware');
/* multer */


/* validaciones */
const validateRegister = [
    check("first_name").notEmpty().withMessage("*Debe ingresar un nombre").bail().isLength({min:2}).withMessage("*Debe tener al menos 2 caracteres"),
    check("last_name").notEmpty().withMessage("*Debe ingresar un apellido").bail().isLength({min:2}).withMessage("*Debe tener al menos 2 caracteres"),
    check("email").notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("*Debes ingresar un formato válido de email"),
    check("password").notEmpty().withMessage("*Debes ingresar una contraseña").bail().isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 carácteres").bail().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i").withMessage("Debe contener al menos 1 mayuscula, y un carácter especial"),
    check("address").notEmpty().withMessage("*Debes colocar una dirección"),
    check("image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExt = [".jpg", ".png", ".gif"];
        
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


const usersController = require("../controllers/usersController");


router.get("/" , usersController.list);

router.get("/register", guestMiddleware, usersController.register);
router.post("/register", userMulterMiddleware.single("image"), validateRegister, usersController.create);

router.get("/edit-user/:id", usersController.edit)
router.put("/edit-user/:id", userMulterMiddleware.single("image"), usersController.update)

router.get("/delete-user/:id", usersController.delete);
router.delete("/delete-user/:id", usersController.destroy);


router.get("/login", guestMiddleware, usersController.login);
router.post("/login", usersController.processLogin);

router.get("/detail", authMiddleware, usersController.detail);
router.get("/logout", authMiddleware, usersController.logout);

module.exports = router
