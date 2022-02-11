const Contenedor = require('./Clientes/Mongo.js');

class Mensajes extends Contenedor {

    constructor() {
        super('mensajes');
    }

}


const contenedor = new Mensajes();

module.exports = contenedor;