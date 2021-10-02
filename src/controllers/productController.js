const path = require("path")
const controlador = {
    
    search: (req, res) => {
        res.render("products")
    },  
    
    detalleProducto: (req, res) => {
        res.render("detalle-producto")
    },

    crearProducto: (req, res) => {
        res.render("crear-producto")
    },

    edicionProducto: (req, res) => {
        res.render("edicion-producto")
    }
}



module.exports = controlador