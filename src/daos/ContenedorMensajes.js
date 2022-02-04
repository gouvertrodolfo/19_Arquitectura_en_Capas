const Contenedor = require('./contenedores/Mongo.js');

class ContenedorMensajes extends Contenedor {

    constructor() {
        super('mensajes');
    }

}


const contenedor = new ContenedorMensajes();

module.exports = contenedor;