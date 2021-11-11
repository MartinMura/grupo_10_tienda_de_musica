
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const db = require("../../database/models")
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
        
        if(req.file){
            let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); /* readfileSync lee el contenido que ya habia en el archivo, y json parse lo convierte en objeto para poder trabajar con el contenido */
            
            let nuevoProducto = {
                
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                description: req.body.description,
                image: req.file.filename
            };
            
            producto.push(nuevoProducto);
            let productsJSON = JSON.stringify(producto, null, " ");
            fs.writeFileSync(productsFilePath, productsJSON);
    
            res.redirect("/productos")
        } else {
            res.redirect("/productos/crear-producto")
        }
        
    },

    edicionProducto: (req, res) => {
        let idProduct = parseInt(req.params.id);
        
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let productToEdit = producto.filter(i => i.id === idProduct);
        res.render("edicion-producto", {productToEdit:productToEdit})

        
    },
    actualizar: (req, res ) => {
    
        let idProduct = parseInt(req.params.id);
        
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
		fs.writeFileSync(productsFilePath, productsJSON);
		res.redirect('/productos');
        
    },
    delete: (req, res ) => {
        let idProduct = parseInt(req.params.id);
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let productToEdit = producto.filter(i => i.id == idProduct);
        console.log(productToEdit)
        res.render("delete-product", {productToEdit:productToEdit})
        

    },

    destroy: (req, res) => {
        let idProduct = parseInt(req.params.id);
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let indexProduct = producto.findIndex(product => product.id === idProduct);
        console.log(indexProduct);

        let productsUpdated = producto.filter(i => i.id != idProduct);
        let productsUpdatedJSON = JSON.stringify(productsUpdated, null, " ");
        fs.writeFileSync(productsFilePath, productsUpdatedJSON);

        res.redirect("/productos");
    }
}



module.exports = controlador