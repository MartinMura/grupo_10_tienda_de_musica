const db = require('../../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        
        let countWind = db.Product.findAndCountAll({
            where: {
                category: { [Op.like]: "Instrumentos de viento"}
            }
        }).then(wind => {
            countWind = wind.count
        });

        let countGuitar = db.Product.findAndCountAll({
            where: {
                category: { [Op.like]: "Guitarras"}
            }
        }).then(guitar => {
            countGuitar = guitar.count
        });

        let countMic = db.Product.findAndCountAll({
            where: {
                category: { [Op.like]: "Microfonos"}
            }
        }).then(mic => {
            countMic = mic.count
        });

        let countPercusion = db.Product.findAndCountAll({
            where: {
                category: { [Op.like]: "Percusión"}
            }
        }).then(percusion => {
            countPercusion = percusion.count
        });

        let countCD = db.Product.findAndCountAll({
            where: {
                category: { [Op.like]: "CDs"}
            }
        }).then(cd => {
            countCD = cd.count
        });

        let countVinyl = db.Product.findAndCountAll({
            where: {
                category: { [Op.like]: "Vinilos"}
            }
        }).then(vinyl => {
            countVinyl = vinyl.count
        });

        db.Product.findAll({
            attributes: ["id", "product_name", "product_description", "price", "product_image", "created_at"
        ]
            })
            .then(products => {
                for(let i = 0; i < products.length; i++){
                    products[i].setDataValue("detail", "http://localhost:3001/api/products/" + products[i].id)
                }
                for (let i = 0; i < products.length; i++) {
                    products[i].setDataValue('pathImg','http://localhost:3001/images/images-productos/' +
                        products[i].product_image
                    )
                }
                
                res.status(200).json({
                    
                    data: products,
                    countByCategory: [{
                        name: "Instrumentos de viento",
                        cantidad: countWind
                        },
                        {
                            name: "Guitarras",
                            cantidad: countGuitar
                        },
                        {
                            name:"Percusión",
                            cantidad:countPercusion
                        },
                        {
                            name:"CDs",
                            cantidad: countCD
                        },
                        {
                            name: "Vinilos",
                            cantidad: countVinyl
                        },
                        {
                            name: "Microfonos",
                            cantidad: countMic
                        },
                    ],

                       /*  categorias: products.category.length, */
                        count: products.length,
                        /* countByCategory: {
                            Wind: countWind,
                            Guitar: countGuitar,
                            Percusion: countPercusion,
                            CDs: countCD,
                            Vynil: countVinyl,
                            Mics: countMic,
                            
                    } */
                
                    
                    
                })
                
            })
        
        
        /* 
        db.Product.findAll({
            attributes: ["id", "product_name", "product_description", "category"]
            })
            .then((products) => {
                for(let i = 0; i < products.length; i++){
                    products[i].setDataValue("detail", "http://localhost:3000/api/products/" + products[i].id)
                }
                return res.status(200).json({
                    count: products.length,
                    products: products
                    
                })
                
            })
            .catch((err) => {
                new Error(err)
            }); */
        
    },
    
    productApiDetail: (req, res) => {
        db.Product.findByPk(parseInt(req.params.id))
            .then(product => {
                
                product.setDataValue('pathImg','http://localhost:3001/images/images-productos/' + product.product_image)
                    
                
                res.status(200).json({
                    product
                })
            })
    }
    
}