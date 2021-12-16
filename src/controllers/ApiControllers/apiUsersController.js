const db = require("../../../database/models");



module.exports = {
    

    userApiList: function(req, res) {
        db.Users.findAll({
            attributes: ["id", "first_name", "last_name", "email", "created_at"
        ]
            })  
            .then((users) => {
                for(let i = 0; i < users.length; i++){
                    users[i].setDataValue("detail", "http://localhost:3001/api/users/" + users[i].id)
                }
                return res.status(200).json({
                    count: users.length,
                    data: users
                })
                
            })
            .catch((err) => {
                new Error(err)
            });
        
    },

    userApiID: function(req, res) {
        db.Users.findByPk(parseInt(req.params.id))
        .then((user) => {
            user.setDataValue('pathImg','http://localhost:3001/images/users-images/' + user.profile_image)
            res.status(200).json({
                
                id: user.id,
                name: user.first_name + " " + user.last_name,
                email: user.email,
                address: user.address,
                pathImg: 'http://localhost:3001/images/users-images/' + user.profile_image

                
                
                
                
            })
        })
    }
}