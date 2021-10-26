// 1. guardar nuestro usuario en la DB
// 2. Buscar al usuario que se quiere loguear por su email
// 3. Buscar a un usuario por su id
// 4. Editar la información de un usuario
// 5. Eliminar a un usuario de la DB

// CRUD
const fs = require("fs")


const User = {
    fileName: "../src/data/usersDataBase.json",

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    findAll: function(){
        return this.getData()
    },

    create: function(userData) {

    }
}

console.log(User.getData());