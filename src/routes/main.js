const express = require("express");

const router = express.Router();
const path = require("path")

const mainController = require("../controllers/mainController.js");


router.get("/", mainController.index);

router.post("/", mainController.index);


router.get("/shopping-list", mainController.shoppingList);







module.exports = router;