const cartaoRotas = require('./cartao-rotas');
const dispositivoRotas = require('./dispositivo-rotas');
const usuarioRotas = require('./usuario-rotas');

module.exports = (app) => {
    usuarioRotas(app);
    dispositivoRotas(app);
    cartaoRotas(app);
};