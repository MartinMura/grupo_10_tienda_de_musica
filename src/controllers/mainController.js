const path = require("path")


const controlador = {
    index: (req, res) => {
        res.render(path.resolve(__dirname, "../views/index.ejs")) /* muy importante poner render en lugar de sendfile, esto hace que funcione el formato ejs */
    },

    login:  (req, res) => {
        res.render(path.resolve(__dirname, "../views/login.ejs"))
    },

    register: (req, res) => {
        res.render(path.resolve(__dirname, "../views/register.ejs"))
    },

    detalleProducto: (req, res) => {
        res.render(path.resolve(__dirname, "../views/detalle-producto.ejs"))
    },

    shoppingList: (req, res) => {
        res.render(path.resolve(__dirname, "../views/shopping-list.ejs"))
    }


}

module.exports = controlador