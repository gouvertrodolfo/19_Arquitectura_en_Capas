// const sqlite = require('./mensajes/sqlite')
const mongoDB = require('../daos/contenedores/Mongo')

const moment = require('moment')
const contenedor = require('../daos/ContenedorMensajes')


class Chat {
    
    constructor() {
        
    }

    async getAll() {
        return await contenedor.getAll()
    }

    async AddMensaje(data) {

        data.fechayhora = moment(new Date()).format('DD/MM/YYYY HH:MM:SS');
        await contenedor.create(data)

        return await contenedor.getAll()
    }

}

module.exports = Chat