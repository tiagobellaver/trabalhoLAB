const DispositivoControlador = require('../controllers/dispositivo-controller');
const dispositivoControlador = new DispositivoControlador();

const Dispositivo = require('../models/dispositivo');

module.exports = (app) => {
    const rotasDispositivo = DispositivoControlador.rotas();
    
    app.get(rotasDispositivo.lista, dispositivoControlador.lista());
    app.get(rotasDispositivo.mostrar, dispositivoControlador.mostrarDispositivo());
    app.route(rotasDispositivo.cadastro).post(Dispositivo.validacoes(), dispositivoControlador.cadastra());
    app.route(rotasDispositivo.edicao).put(Dispositivo.validacoes(), dispositivoControlador.edita());
    app.delete(rotasDispositivo.deletar, dispositivoControlador.remove());
};