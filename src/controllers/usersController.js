const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const User = require("../../models/User")
const {validationResult} = require("express-validator")
const bcrypt = require("bcryptjs");





const controlador = {

    list: (req, res) => {
        db.Users.findAll()
        .then(function(usuarios){
            
            res.render("users", {usuarios:usuarios})
        })

        /* usuarios
        usuarios.forEach(usuarios => {
            console.log(typeof usuarios.id)
        }); */
        
    },


    register: (req, res) => {
        
        res.render("register", {user: req.session.userLogged})
    },

    
    create: (req, res) => {
        const validation = validationResult(req);

        if(validation.errors.length > 0){
            return res.render("register", {
                errors: validation.mapped(),
                oldData: req.body
            });
        }

        db.Users.findAll()
        .then(users => {
            let userInDB = users.find(i => i.email == req.body.email)
            if(userInDB) {
                return res.render("register", {
                    errors: {
                        email: {
                            msg: "Este email ya está en uso"
                        }
                    },
                    oldData: req.body
                });
            } else {
                db.Users.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    address: req.body.address,
                    profile_image: req.file.filename
                })
                .then(function(userRegistered){
                    req.session.userLogged = userRegistered
                    return res.redirect("/users")
                })
            }
            })
        



        /* 
            METODO QUE USÉ ANTES DE TENER MODELOS
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
            fs.writeFileSync(usersFilePath, usersJson); */

            
        

    },

    edit: (req, res) => {
        db.Users.findByPk(parseInt(req.params.id))
            .then(function(userToEdit){
                res.render("editing-user", {userToEdit})
            })
        /* idUser = parseInt(req.params.id);
        usuarios; */
        /* let userToEdit = usuarios.filter(user => user.id === idUser); */
        

    },

    update: (req, res) => {
        let idUser = parseInt(req.params.id);
        db.Users.findByPk(idUser)
            .then(function(userFound){
                db.Users.update({
                    first_name: req.body.first_name || userFound.first_name ,
                    last_name: req.body.last_name || userFound.last_name,
                    email: req.body.email || userFound.email,
                    password: bcrypt.hashSync(req.body.password, 10),
                    address: req.body.address || userFound.address,
                    profile_image: req.file == undefined ? userFound.profile_image : req.file.filename,
                
                },
                {
                    where: {
                        id: userFound.id
                    }
                })
                .then(() => {
                    res.redirect('/users');
                })
            })
    
        /* usuarios.forEach(user => {
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
		fs.writeFileSync(usersFilePath, usersJSON); */
		

    },

    delete: (req, res) => {
        let idUser = parseInt(req.params.id);
        db.Users.findByPk(idUser)
            .then(function(userToDelete){
                res.render("delete-user", {userToDelete: userToDelete})
            })

        /* let idUser = parseInt(req.params.id);
        usuarios;
        let userToDelete = usuarios.filter(i => i.id === idUser); */
        
    },
    
    destroy: (req, res) => {
            let idUser = parseInt(req.params.id);
            db.Users.destroy({
                where: {id: parseInt(req.params.id)},
                force: true
                
            })
                .then(function(){
                    res.redirect("/users");

                })
            /* usuarios;
            let indexUsers = usuarios.findIndex(user => user.id === idUser);
            console.log(indexUsers);
    
            let usersUpdated = usuarios.filter(i => i.id != idUser);
            let usersUpdatedJSON = JSON.stringify(usersUpdated, null, " ");
            fs.writeFileSync(usersFilePath, usersUpdatedJSON); */
    
            
    },

    login: (req, res) => {
        res.render("login")
    },

    processLogin: (req, res) => {
        let validation = validationResult(req);
        if(validation.errors.length > 0){
            return res.render("login", {
                errors: validation.mapped(),
                oldData: req.body
            });
        };

        db.Users.findAll()
            .then(users => {
                let userToLogin = users.find(i => i.email == req.body.email);
                if(userToLogin){
                    let correctPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
                    if(correctPassword){
                        delete userToLogin.password;
                        req.session.userLogged = userToLogin;
                        if (req.body.remember_user) {
                            res.cookie("userEmail", req.body.email, {maxAge: (1000 * 6) * 60})
                        }
        
                        res.redirect("/users/detail")
                    } else {
        
                        res.render("login", {
                            errors: {
                                password:{
                                    msg: "Las credenciales son inválidas"
                                }
                                
                            }, 
                            oldData: req.body
                        })
                    }
                    
                }
                res.render("login", {
                    errors: {
                        email:{
                            msg: "Este email no está registrado"
                        }
                        
                    },
                    oldData: req.body
                })
            })
        /* METODO ANTES DE MODELOS */
        /* usuarios;
        for (let i = 0; i < usuarios.length; i++) {
            if (req.body.email == usuarios[i].email){
                res.render("user-profile")
                
            }
                res.redirect("/users/login")
        
        } */
        /* let userToLogin = User.findByField("email", req.body.email);
        
        if(userToLogin){
            let correctPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if(correctPassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                if (req.body.remember_user) {
                    res.cookie("userEmail", req.body.email, {maxAge: (1000 * 6) * 60})
                }

                res.redirect("/users/detail")
            } else {

                res.render("login", {
                    errors: {
                        password:{
                            msg: "Las credenciales son inválidas"
                        }
                        
                    }, 
                    oldData: req.body
                })
            }
            
        }
        res.render("login", {
            errors: {
                email:{
                    msg: "Este email no está registrado"
                }
                
            },
            oldData: req.body
        }) */
    },

    detail: (req, res ) => {
        /* let idUser = parseInt(req.params.id);
        usuarios;
        let userDetail = usuarios.filter(user => user.id === idUser);
        res.render("user-profile", {userDetail}) */

        return res.render("user-profile", {user: req.session.userLogged})
    },

    logout: (req,res) => {
        req.session.destroy();
        res.clearCookie("userEmail");
        return res.redirect("/")
    }
    
    
    
}




module.exports = controlador