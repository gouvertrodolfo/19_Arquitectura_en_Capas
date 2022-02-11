const { Router } = require('express');
const apiProductos = Router();
const {mwdIsAuth, mwdIsAdmin} = require("./middelware/PassportLocal");
const {listar, buscar, crear, actualizar, borrar} = require("../controller/productos");
/* ------------------------------------------------------ */

// GET '/api/productos' -> devuelve todos los productos.
apiProductos.get('/', mwdIsAuth, listar);

// GET '/api/productos/:id' -> devuelve un producto según su id.
apiProductos.get('/:id', mwdIsAuth, buscar );

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
apiProductos.post('/', mwdIsAuth, mwdIsAdmin, crear);

// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
apiProductos.put('/:id', mwdIsAuth, mwdIsAdmin, actualizar);

// DELETE '/api/productos/:id' -> elimina un producto según su id.
apiProductos.delete('/:id', mwdIsAuth, mwdIsAdmin, borrar);


exports.apiProductos = apiProductos;