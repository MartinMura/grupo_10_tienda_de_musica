const express = require("express");

const path = require("path");
const rutasMain = require("./routes/main.js");
const rutasProductos = require("./routes/producto.js")

const app = express();
const publicPath = path.resolve(__dirname, "../public");
const methodOverride = require("method-override");

/* use */
app.use( express.static (publicPath));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));

/* template engine ejs */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


/* sistema de rutas */

app.use("/" , rutasMain);
app.use("/productos", rutasProductos);


app.listen(3000, () => {
    console.log("Servidor funcionando, puerto 3000");
});



