const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "./public");
app.use( express.static (publicPath));


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.post("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})


app.get("/shopping-list", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/shopping-list.html"))
})

app.listen(3000, () => {
    console.log("Servidor funcionando, puerto 3000");
});



