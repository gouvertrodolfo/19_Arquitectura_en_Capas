const Contenedor =require('../Clientes/Mongo')


class Mongo extends Contenedor {

    constructor() {
        super('eCommerce', 'productos');
    }
    
    update(product) {
        const { id, codigo, timestamp, nombre, descripcion, precio, thumbnail, stock } = product

        this.collection.updateOne(
            {
                id: id
            },
            {
                '$set':
                {
                    codigo: codigo,
                    timestamp: timestamp,
                    nombre: nombre,
                    descripcion: descripcion,
                    precio: precio,
                    thumbnail: thumbnail,
                    stock: stock
                }
            })
            .then()
            .catch(err => { logger.error(err) })
    }

}

function getInstancia()
{
    const instacia = new Mongo()
    return instacia;
}

module.exports = getInstancia;