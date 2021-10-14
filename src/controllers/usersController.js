const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");


const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


const controlador = {

    list: (req, res) => {
        usuarios
        usuarios.forEach(usuarios => {
            console.log(typeof usuarios.id)
        });
        res.render("users", {usuarios:usuarios})
    },


    register: (req, res) => {
        res.render("register")
    },

    
    create: (req, res) => {
        if(req.file) {
            usuarios;
            newUser = {
                
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                image: req.file.filename
            };

            usuarios.push(newUser);
            let usersJson = JSON.stringify(usuarios, null, " ");
            fs.writeFileSync(usersFilePath, usersJson);

            res.redirect("/users")
            
        } else {
            res.redirect("/users/register")
        }

    }

}


module.exports = controlador