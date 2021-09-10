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

    detalleProducto: (req, res) => {
        res.render("detalle-producto")
    },

    shoppingList: (req, res) => {
        res.render("shopping-list")
    },

    crearProducto: (req, res) => {
        res.render("crear-producto")
    },

    edicionProducto: (rez, res) => {
        res.render("edicion-producto")
    }


}

module.exports = controlador