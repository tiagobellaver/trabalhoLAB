const DispositivoControlador = require('../controllers/dispositivo-controller');
const dispositivoControlador = new DispositivoControlador();

const Cartao = require('../models/cartao');

module.exports = (app) => {
    const rotasDispositivo = DispositivoControlador.rotas();
    app.get(rotasDispositivo.lista, dispositivoControlador.lista());
    app.get(rotasDispositivo.mostrar, dispositivoControlador.mostrarDispositivo());
    app.post(rotasDispositivo.cadastrar, dispositivoControlador.cadastra());
    app.put(rotasDispositivo.editar, Cartao.validacoes(), dispositivoControlador.edita());
    app.delete(rotasDispositivo.deletar, dispositivoControlador.remove());
    app.get(rotasDispositivo.mostrarCartoes, dispositivoControlador.mostrarCartoes());
    app.post(rotasDispositivo.adicionarCartao, dispositivoControlador.adicionarCartao());
    app.put(rotasDispositivo.setarAutorizacao, dispositivoControlador.setarAutorizacao());
    app.delete(rotasDispositivo.removerCartao, dispositivoControlador.removerCartao());
    app.get(rotasDispositivo.mostrarHistorico, dispositivoControlador.mostrarHistorico());
};