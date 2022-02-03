const {buscarXUsername } = require( '../api/Usuario')


async function buscar( username ) 
{
    const user = buscarXUsername(username);
    return user;
}

module.exports = {buscar}
