const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/users-images"));

    },

    filename: (req, file, cb) => {
        let imageName = "usuario-" + Date.now() + path.extname(file.originalname);
        cb(null, imageName);
    }
});

let fileUpload = multer ({ storage })

const usersController = require("../controllers/usersController");

router.get("/" , usersController.list);

router.get("/register", usersController.register)
router.post("/register", fileUpload.single("image"),  usersController.create)

router.get("/edit-user/:id", usersController.edit)
router.put("/edit-user/:id", fileUpload.single("image"), usersController.update)

router.get("/delete-user/:id", usersController.delete);
router.delete("/delete-user/:id", usersController.destroy);

router.get("/detail/:id", usersController.detail)

module.exports = router
