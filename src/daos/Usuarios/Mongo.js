const Contenedor = require('../Clientes/Mongo.js');
const { logger } = require('../../logger.js')

class Mongo extends Contenedor {

    constructor() {
        super('usuarios');
    }

    async getByUserName(username) {

        try {
            const [object] = await this.collection.find({ username: username }).toArray()
            return object
        }
        catch (err) {
            logger.error(err)
        }
    }


    update(usuario) {
        const { username, password, email, firstName, lastName, avatar } = usuario

        this.collection.updateOne(
            {
                username: username
            },
            {
                '$set':
                {
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    avatar: avatar
                }
            })
            .then()
            .catch(err => { logger.error(err) })
    }

}

function getInstancia() {
    const instacia = new Mongo()
    return instacia;
}

module.exports = { getInstancia };