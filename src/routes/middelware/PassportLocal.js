const passport = require('passport');
const { Strategy } = require('passport-local');

const { SignUp, login } = require('../../controller/login.js');
const { buscar } = require('../../controller/usuarios.js')

passport.use('signup', new Strategy({ passReqToCallback: true }, SignUp))

passport.use('login', new Strategy(login));


passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(async function (username, done) {
  const usuario = await buscar(username)
  done(null, usuario);
});


function mwdIsAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).json({ error: 'Acceso no autorizado' })
  }
}

function mwdIsAuthweb(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect("/login");
  }
}

function mwdIsAdmin(req, res, next) {
  if (!req.user.admin) {
    res.status(401).json({ error: 'ruta no autorizada' })
  }
  else {
    next()
  }
}

module.exports = { passport, mwdIsAuth, mwdIsAuthweb, mwdIsAdmin };