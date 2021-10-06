const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");


const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


const controlador = {

    list: (req, res) => {
        usuarios
        res.render("users", {usuarios:usuarios})
    }

}


module.exports = controlador