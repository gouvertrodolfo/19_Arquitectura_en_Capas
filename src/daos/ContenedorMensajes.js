const Contenedor = require('./contenedores/Mongo.js');

class ContenedorMensajes extends Contenedor {

    constructor() {
        super('usuarios');
    }

}


const contenedor = new ContenedorMensajes();

module.exports = contenedor;