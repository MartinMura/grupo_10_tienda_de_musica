const express = require("express");

const path = require("path");
const rutasMain = require("./routes/main.js");
const rutasProductos = require("./routes/producto.js")

const app = express();
const publicPath = path.resolve(__dirname, "../public");


app.use( express.static (publicPath));

/* template engine ejs */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


/* sistema de rutas */

app.use("/" , rutasMain);
app.use("/productos", rutasProductos);


app.listen(3000, () => {
    console.log("Servidor funcionando, puerto 3000");
});



