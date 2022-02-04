
function mwdRoleAdministrador(req, res, next) {

    if (!req.user.admin) {
        res.status(401).json({ error: 'ruta no autorizada' })
    }
    else {
        next()
    }
}
  
module.exports ={ mwdRoleAdministrador }