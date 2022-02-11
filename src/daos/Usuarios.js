const Contenedor = require('./Usuarios/Mongo.js');
const contenedor = Contenedor.getInstancia()
module.exports =  contenedor ;
