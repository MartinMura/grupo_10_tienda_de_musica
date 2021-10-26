const fs = require("fs");
const path = require("path");
const {validationResult} = require("express-validator")
const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
const bcrypt = require("bcryptjs");



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
        const validation = validationResult(req);

        if(validation.errors.length > 0){
            return res.render("register", {errors: validation.mapped(), oldData: req.body})
        }
        
        if(req.file) {
            usuarios;
            newUser = {
                
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename
            };

            usuarios.push(newUser);
            let usersJson = JSON.stringify(usuarios, null, " ");
            fs.writeFileSync(usersFilePath, usersJson);

            res.redirect("/users")
            
        } else {
            res.redirect("/users/register")
        }

    },

    edit: (req, res) => {
        idUser = parseInt(req.params.id);
        usuarios;
        let userToEdit = usuarios.filter(user => user.id === idUser);
        res.render("editing-user", {userToEdit})

    },

    update: (req, res) => {
        let idUser = parseInt(req.params.id);
        usuarios;
        usuarios.forEach(user => {
            if(user.id === idUser) {
                user.first_name = req.body.first_name,
                user.last_name = req.body.last_name,
                user.email = req.body.email
                
                if(req.file) {
                    let indexUser = usuarios.findIndex(user => user.id === idUser);
                    let imagePath = path.join(__dirname, "../../public/images/user-images", usuarios[indexUser].image);
                    fs.unlink(imagePath, function (err) {
						if (err) throw err;
					});
					user.image = req.file.filename;
                }
            }
        });
        let usersJSON = JSON.stringify(usuarios, null, ' ');
		fs.writeFileSync(usersFilePath, usersJSON);
		res.redirect('/users');

    },

    delete: (req, res) => {
        let idUser = parseInt(req.params.id);
        usuarios;
        let userToDelete = usuarios.filter(i => i.id === idUser);
        res.render("delete-user", {userToDelete: userToDelete})
    },
    
    destroy: (req, res) => {
            let idUser = parseInt(req.params.id);
            usuarios;
            let indexUsers = usuarios.findIndex(user => user.id === idUser);
            console.log(indexUsers);
    
            let usersUpdated = usuarios.filter(i => i.id != idUser);
            let usersUpdatedJSON = JSON.stringify(usersUpdated, null, " ");
            fs.writeFileSync(usersFilePath, usersUpdatedJSON);
    
            res.redirect("/users");
    },

    login: (req, res) => {
        res.render("login")
    },

    processLogin: (req, res) => {
        usuarios;
        for (let i = 0; i < usuarios.length; i++) {
            if (req.body.email == usuarios[i].email){
                res.render("user-profile")
                
            }
                res.redirect("/users/login")
        
        }
    },

    detail: (req, res ) => {
        let idUser = parseInt(req.params.id);
        usuarios;
        let userDetail = usuarios.filter(user => user.id === idUser);
        res.render("user-profile", {userDetail})
    }
    
    
    
}




module.exports = controlador