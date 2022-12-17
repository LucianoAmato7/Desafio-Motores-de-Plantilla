import Api from "./api/productos.js";
import express from "express";
import handlebars from 'express-handlebars'

const app = express()

app.use(express.urlencoded({extended: true}));

app.engine(
    "hbs",
    handlebars({
        extname: "*.hbs",
        defaultLayout: "index.hbs",
    })
);

app.set('view engine', "hbs");
app.set("views", "./views");


const api = new Api()

let productos = api.productosTodos()


//FUNCIONALIDADES
// ----------------------------------------------|


app.get('/', (req, res) => {
    res.render('formulario');
});

app.get('/productos', (req, res) => {
    res.render('vista', {productos});
});

app.post('/productos', (req, res) => {

    let newProd = req.body

    api.guardar( newProd )

    console.log("Producto guardado");

    res.redirect('/')
});


//INICIAMOS EL SERVIDOR
// ----------------------------------------------|

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log( `Servidor corriendo en el puerto ${ server.address().port }` );
})

server.on( 'error', ( error ) => {
    console.log( `Error en servidor: ${error}` );
} )