const Contenedor = require('./contenedoresUsuarios/Mongo.js');
const contenedor = Contenedor.getInstancia()
module.exports =  contenedor ;
