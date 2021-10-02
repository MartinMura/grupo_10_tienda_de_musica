const path = require("path")


const controlador = {
    index: (req, res) => {
        res.render("index") 
    },

    login:  (req, res) => {
        res.render("login")
    },

    register: (req, res) => {
        res.render("register")
    },

    

    shoppingList: (req, res) => {
        res.render("shopping-list")
    }


}

module.exports = controlador