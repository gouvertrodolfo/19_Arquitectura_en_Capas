// const sqlite = require('./mensajes/sqlite')
const mongoDB = require('../daos/contenedores/Mongo')

const moment = require('moment')

class Chat {
    
    constructor() {
        this.contenedor = new mongoDB('CursoNode','Mensajes');
    }

    async getAll() {
        return await this.contenedor.getAll()
    }

    async AddMensaje(data) {

        data.fechayhora = moment(new Date()).format('DD/MM/YYYY HH:MM:SS');

        return await this.contenedor.AddMensaje(data)
    }

}

module.exports = Chat