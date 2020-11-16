const cartaoRotas = require('./cartao-rotas');
const usuarioRotas = require('./usuario-rotas');
const historicoRotas = require('./historico-rotas');
const dispositivoRotas = require('./dispositivo-rotas');

module.exports = (app) => {
    cartaoRotas(app);
    usuarioRotas(app);
    historicoRotas(app);
    dispositivoRotas(app);
};