import Api from "./api/productos.js";
import express from "express"


const app = express()

app.use(express.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'ejs');

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