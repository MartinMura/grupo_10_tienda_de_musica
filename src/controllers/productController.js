
/* const productsFilePath = path.join(__dirname, "../data/productsDataBase.json"); */
const { validationResult } = require("express-validator");
const db = require("../../database/models");
const Op = db.Sequelize.Op;
const controlador = {   

    list: (req, res) => {
        db.Product.findAll()
            .then(function(productos){
                res.render("products", {producto:productos})
            })
        /* let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        producto.forEach(producto => {
        })
        res.render("products", {producto:producto}) */
    },  
    
    detalleProducto: (req, res) => {
        res.render("detalle-producto")
    },

    crearProducto: (req, res) => {
        res.render("crear-producto")
    },

    store:(req,res) => {
        const validation = validationResult(req);
        if(validation.errors.length > 0){
            return res.render("crear-producto", {
                errors: validation.mapped(),
                oldData: req.body
            });
        }
        if(req.file){

            db.Product.create({
                
                product_name: req.body.name,
                product_description: req.body.description,
                price: req.body.price,
                product_image: req.file.filename,
                category: req.body.category,
                stock: req.body.stock
            }).then(function(){
                res.redirect("/productos")
            })


            /* let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); /* readfileSync lee el contenido que ya habia en el archivo, y json parse lo convierte en objeto para poder trabajar con el contenido 
            
            let nuevoProducto = {
                
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                description: req.body.description,
                image: req.file.filename
            };
            
            producto.push(nuevoProducto);
            let productsJSON = JSON.stringify(producto, null, " ");
            fs.writeFileSync(productsFilePath, productsJSON); */
    
            
        } else {
            res.redirect("/productos/crear-producto")
        }
        
    },

    edicionProducto: (req, res) => {
        
        db.Product.findByPk(parseInt(req.params.id))
        .then(function(productToEdit){
            res.render("edicion-producto", {productToEdit:productToEdit})
        })

        
        /* let idProduct = parseInt(req.params.id);
        
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let productToEdit = producto.filter(i => i.id === idProduct); */
        

        
    },
    actualizar: (req, res ) => {


        let id = req.params.id;
        db.Product.findByPk(id).then((producto) => {
        db.Product.update(
        {
            product_name: req.body.name || producto.product_name,
            price: req.body.price || producto.price,
            
            product_description: req.body.description || producto.product_description,
            
            
            category: req.body.category || producto.category,
            product_image: req.file == undefined ? producto.product_image : req.file.filename,
        },
        {
            where: {
                id: id,
            },
        }
        )
        .then(() => {
            return res.redirect('/productos');
        })
        .catch((error) => res.send(error));
    });
    
        /* let idProduct = parseInt(req.params.id);
        
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
		products.forEach(product => {
            
			if(product.id === idProduct) {
				product.name = req.body.name;
				product.price = req.body.price;
				product.category = req.body.category;
				product.description = req.body.description;
                if (req.file) {
                    
					let indexProduct = products.findIndex(product => product.id === idProduct)
					let imagePath = path.join(__dirname, '../../public/images/images-productos', products[indexProduct].image);
					fs.unlink(imagePath, function (err) {
						if (err) throw err;
					});
					product.image = req.file.filename;
				} 
            }
        });
        let productsJSON = JSON.stringify(products, null, ' ');
		fs.writeFileSync(productsFilePath, productsJSON); */
		
        
    },
    delete: (req, res ) => {

        db.Product.findByPk(parseInt(req.params.id))
        .then(function(productToEdit){
            res.render("delete-product", {productToEdit:productToEdit})
        })

        /* let idProduct = parseInt(req.params.id);
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let productToEdit = producto.filter(i => i.id == idProduct);
        console.log(productToEdit) */
        
        

    },

    destroy: (req, res) => {

        db.Product.destroy({
            where: { id: parseInt(req.params.id, 10) },
            force: true,
          }) // force: true es para que se borre por completo de la base de datos, no figura
            .then(() => {
            return res.redirect("/productos");
            })
            .catch((error) => res.send(error));
        },
        /* let idProduct = parseInt(req.params.id);
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let indexProduct = producto.findIndex(product => product.id === idProduct);
        console.log(indexProduct);

        let productsUpdated = producto.filter(i => i.id != idProduct);
        let productsUpdatedJSON = JSON.stringify(productsUpdated, null, " ");
        fs.writeFileSync(productsFilePath, productsUpdatedJSON); */

        search: function(req, res){
            db.Product.findAll({
                where: {
                    product_name: { [ Op.like ]: `%${req.query.search}%`}
                }
            }).then(products => {
                return res.render("products", {searchProducts:products})
            })
        }
    
}



module.exports = controlador