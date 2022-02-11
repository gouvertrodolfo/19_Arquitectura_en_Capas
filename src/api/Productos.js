const NUID = require('nuid')
const  contenedor  = require('../daos/Productos.js');

class Producto {

    constructor(data) {
        const { id, codigo, timestamp, nombre, descripcion, precio, thumbnail, stock } = data

        if (id == undefined) {
            this.id = NUID.next();
            this.timestamp = Date.now()
        }
        else {
            this.id = id;
            this.timestamp = timestamp
        }

        this.codigo = codigo
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio
        this.thumbnail = thumbnail
        this.stock = stock

    }

    modificar(data) {

        const { nombre, descripcion, precio, thumbnail, stock } = data

        this.timestamp = Date.now()

        if (nombre != undefined) {
            this.nombre = nombre;
        }
        if (descripcion != undefined) {
            this.descripcion = descripcion;
        }
        if (precio != undefined) {
            this.precio = precio
        }
        if (thumbnail != undefined) {
            this.thumbnail = thumbnail
        }
        if (stock != undefined) {
            this.stock = stock
        }

        contenedor.actualizar(this.id, this)
    }

    borrar() {
        contenedor.borrar(this.id)
    }

    export() {
        const data = {
            id: id,
            timestamp: timestamp,
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            thumbnail: thumbnail,
            stock: stock
        }
         return data;
    }

}

async function crear(object) {
    const producto = new Producto(object);
    await contenedor.create(producto)
    return producto
}

async function listar() {

    const array = await contenedor.getAll();
    return array
}

async function obtener(id) {

    const dot = await contenedor.getById(id)
    if (dot == undefined) {
        throw ` Producto ${id} no existe`
    }
    {
        const producto = new Producto(dot)
        return producto;
    }
}

module.exports = {
    crear, listar, obtener
}