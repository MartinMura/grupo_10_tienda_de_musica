const express = require('express');
const router = express.Router();

const apiUsersController = require("../../controllers/ApiControllers/apiUsersController")


router.get("/api/users", apiUsersController.userApiList)

router.get("/api/users/:id", apiUsersController.userApiID)





module.exports = router