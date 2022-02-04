const inventario = require("../api/Productos").getInstancia();

async function listar(req, res) {
    const array = await inventario.getAll();
    res.json(array);
};

async function buscar(req, res) {
    const { id } = req.params
    const producto = await inventario.getById(id)

    if (producto == undefined) {
        res.status(404).json({ error: 'producto no encontrado' })
    }
    else {
        res.status(200).json(producto)
    }
}

async function crear(req, res) {
    let producto = req.body
    const id = await inventario.save(producto)
    producto = await inventario.getById(id)
    res.json(producto)
}

async function actualizar(req, res) {
    const { id } = req.params
    let data = req.body

    await inventario.update(id, data)
    const producto = await inventario.getById(id)
    res.json(producto)
}

async function borrar(req, res) {
    const { id } = req.params
    await inventario.deleteById(id)
    res.json({ borrado: "Ok" })
}

module.exports = { listar, buscar, crear, actualizar, borrar }