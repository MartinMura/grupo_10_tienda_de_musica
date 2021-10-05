const { ESRCH } = require("constants");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../database/productsDataBase.json");
const controlador = {   

    search: (req, res) => {
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        res.render("products", {producto:producto})
    },  
    
    detalleProducto: (req, res) => {
        res.render("detalle-producto")
    },

    crearProducto: (req, res) => {
        res.render("crear-producto")
    },

    store:(req,res) => {
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); /* readfileSync lee el contenido que ya habia en el archivo, y json parse lo convierte en objeto para poder trabajar con el contenido */
        
        let nuevoProducto = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description
        };
        producto.push(nuevoProducto);
        let productsJSON = JSON.stringify(producto, null, " ");
        fs.writeFileSync(productsFilePath, productsJSON);

        res.redirect("/")
    },

    edicionProducto: (req, res) => {
        let idProduct = parseInt(req.params.id);
        let producto = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let productToEdit = producto.filter(i => i.id == idProduct);
        console.log(producto)
        res.render("edicion-producto", {productToEdit:productToEdit})

        
    },
    actualizar: (req, res ) => {
        let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		products.forEach(product => {
			if(product.id == idProduct) {
				product.name = req.body.name;
				product.price = req.body.price;
				product.category = req.body.category;
				product.description = req.body.description;
            }
        });
        let productsJSON = JSON.stringify(products, null, ' ');
		fs.writeFileSync(productsFilePath, productsJSON);
        console.log(productsJSON)
		res.redirect('/');
        
    }
}



module.exports = controlador