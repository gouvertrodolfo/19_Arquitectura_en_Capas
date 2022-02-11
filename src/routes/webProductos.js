const { Router } = require('express');
const webProductos = Router();

const {mwdIsAuthweb, mwdIsAdmin} = require("./middelware/PassportLocal");
const {listar, buscar, crear, actualizar, borrar} = require("../controller/productosweb");

/* -------------------------------------- */

webProductos.get("/", mwdIsAuthweb, listar)

webProductos.post("/productos",mwdIsAuthweb, mwdIsAdmin,  crear)

webProductos.get("/productos", mwdIsAuthweb, async (req,res)=>{
    let items = await productos.listarTodo()
    const title = 'Lista de productos'
    res.render('pages/ListadoProductos', { titulo:title, productos:items})
})

exports.webProductos = webProductos;