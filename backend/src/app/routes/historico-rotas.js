const HistoricoController = require('../controllers/historico-controller');
const historicoController = new HistoricoController();

module.exports = (app) => {
    const rotasHistorico = HistoricoController.rotas();
    app.post(rotasHistorico.requisicao, historicoController.requisicao());
    app.get(rotasHistorico.historicos, historicoController.historicos());
    app.get(rotasHistorico.mostrarDetalhes, historicoController.mostrarDetalhes());
};