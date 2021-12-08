const express = require('express');
const router = express.Router();

const apiUsersController = require("../../controllers/ApiControllers/apiUsersController")


router.get("/api/users", apiUsersController.userApi)

router.get("/api/users/:id", apiUsersController.userApiID)





module.exports = router