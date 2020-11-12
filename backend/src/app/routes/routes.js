const cartaoRotas = require('./cartao-rotas');
const usuarioRotas = require('./usuario-rotas');

module.exports = (app) => {
    cartaoRotas(app);
    usuarioRotas(app);
};