const path = require("path")


const controlador = {
    index: (req, res) => {
        res.render("index") 
    },
    
    shoppingList: (req, res) => {
        res.render("shopping-list")
    }


}

module.exports = controlador