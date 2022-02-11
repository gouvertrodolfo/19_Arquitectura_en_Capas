const Productos = require("../api/Productos")

 async function listar(req, res) {
    const items = await Productos.listar()
    const title = 'Productos'
    res.render('pages/index', {user:res.user, titulo:title , productos:items})
}

async function buscar(req, res) {
    const { productoId } = req.params
    try {
        const producto = await Productos.obtener(productoId)
        res.status(200).json(producto.export())
    } catch (err) {
        res.status(400).json(err)
    }
};

async function crear(req, res) {
    let object = req.body
    const producto = await Productos.crear(object)
    socket.emit('productos', producto)
    res.redirect('/')

}

async function actualizar(req, res) {
    const data = req.body
    const { productoId } = req.params
    try {
        const producto = await Productos.obtener(productoId)
        producto.modificar(data)
        res.status(200).json(producto.export())
    
    } catch (err) {
        res.status(400).json(err)
    }
}

async function borrar(req, res) {
    const { productoId } = req.params
    try {
        const producto = await Productos.obtener(productoId)

        producto.borrar();
        res.status(200).json('ok')
    
    } catch (err) {
        res.status(400).json(err)
    }

}

module.exports = {
    listar,
    buscar,
    crear,
    actualizar,
    borrar
}