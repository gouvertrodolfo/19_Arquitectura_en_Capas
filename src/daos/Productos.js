const logger =require('../logger.js');
const dotenv = require( 'dotenv');

const ContenedorMongo = require('./Productos/Mongo');
const Contenedorknex = require('./Productos/Knex');

dotenv.config()

const file = process.env.PRODUCTOS_TIPO_PERSISTENCIA;

let contenedor;
if(file=='Mongo')
{
    contenedor = ContenedorMongo();
}
else
if(file=='knex')
{
    contenedor = Contenedorknex();
}
else
{
    const error= `Persistencia de productos ${file} no implementado`;
    logger.error(error);
    throw error;
}

module.exports = contenedor ;

