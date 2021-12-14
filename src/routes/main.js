const express = require("express");


const router = express.Router();
const path = require("path")

const mainController = require("../controllers/mainController.js");
const adminMiddlewareProducts = require ("../../middlewares/adminMiddlewareProducts")


router.get("/", mainController.index);

router.post("/", mainController.index);


router.get("/shopping-list", adminMiddlewareProducts, mainController.shoppingList);








module.exports = router;