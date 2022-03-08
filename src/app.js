const express = require("express");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const cookie = require("cookie-parser");
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware");
const cors = require("cors");
const host = '0.0.0.0';
const port = process.env.PORT || 3001;


const rutasMain = require("./routes/main.js");
const rutasProductos = require("./routes/producto.js")
const rutasUsuarios = require("./routes/users.js");
const rutasApiUsers = require("./routes/APIs/apiUsers.js");
const rutasApiProducts = require("./routes/APIs/apiProducts.js")

const app = express();

const publicPath = path.resolve(__dirname, "../public");
const methodOverride = require("method-override");


/* use */
app.use( express.static (publicPath));
app.use(express.urlencoded({ extended: false})); /* captura la informacion que se envia desde un formulario via post en req.body */
app.use(express.json());
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(session({
    secret: "Tienda de musica",
    resave: false,
    saveUninitialized: false,
}));
app.use(cors());
app.use(cookie())
app.use(userLoggedMiddleware);



/* template engine ejs */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


/* sistema de rutas */

app.use("/" , rutasMain);
app.use("/productos", rutasProductos);
app.use("/users", rutasUsuarios);
app.use("/", rutasApiUsers);
app.use("/", rutasApiProducts);


app.listen(port, host, () => {
    console.log(`Listening on ${ port }`);
});



