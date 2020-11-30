const DispositivoControlador = require('../controllers/dispositivo-controller');
const dispositivoControlador = new DispositivoControlador();

const Dispositivo = require('../models/dispositivo');

module.exports = (app) => {
    const rotasDispositivo = DispositivoControlador.rotas();
    app.get(rotasDispositivo.lista, dispositivoControlador.lista());
    app.get(rotasDispositivo.mostrar, dispositivoControlador.mostrarDispositivo());
    app.post(rotasDispositivo.cadastrar, Dispositivo.validacoes(), dispositivoControlador.cadastra());
    app.put(rotasDispositivo.editar, Dispositivo.validacoes(), dispositivoControlador.edita());
    app.delete(rotasDispositivo.deletar, dispositivoControlador.remove());
    app.get(rotasDispositivo.mostrarCartoes, dispositivoControlador.mostrarCartoes());
    app.post(rotasDispositivo.adicionarCartao, Dispositivo.dispositivo_cartao(), dispositivoControlador.adicionarCartao());
    app.put(rotasDispositivo.setarAutorizacao, Dispositivo.dispositivo_cartao(), dispositivoControlador.setarAutorizacao());
    app.put(rotasDispositivo.removerCartao, Dispositivo.remove_dispositivo_cartao(), dispositivoControlador.removerCartao());
    app.get(rotasDispositivo.mostrarHistorico, dispositivoControlador.mostrarHistorico());
};