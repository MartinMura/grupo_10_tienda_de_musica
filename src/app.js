const express = require("express");

const path = require("path");
const rutasMain = require("./routes/main.js")

const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.set("view engine", "ejs");
app.use( express.static (publicPath));




app.use("/" , rutasMain);


app.use("/login", rutasMain)

app.use("/register", rutasMain)


app.use("/shopping-list", rutasMain)


app.use("/detalle-producto", rutasMain);

app.listen(3000, () => {
    console.log("Servidor funcionando, puerto 3000");
});



/* app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))         ruta que funciona
})

app.post("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
}) */