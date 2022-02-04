const { Router } = require('express');
const apiProductos = Router();
const {isAuth} = require("./middelware/PassportLocal");
const {mwdRoleAdministrador} = require('./middelware/productos')
const {listar, buscar, crear, actualizar, borrar} = require("../controller/productos");
/* ------------------------------------------------------ */

// GET '/api/productos' -> devuelve todos los productos.
apiProductos.get('/', listar);

// GET '/api/productos/:id' -> devuelve un producto según su id.
apiProductos.get('/:id', buscar );

// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
apiProductos.post('/', isAuth, mwdRoleAdministrador, crear);

// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
apiProductos.put('/:id', isAuth, mwdRoleAdministrador, actualizar);

// DELETE '/api/productos/:id' -> elimina un producto según su id.
apiProductos.delete('/:id', isAuth, mwdRoleAdministrador, borrar);


exports.apiProductos = apiProductos;