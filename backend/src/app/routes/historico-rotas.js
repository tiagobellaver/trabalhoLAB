const HistoricoController = require('../controllers/historico-controller');
const historicoController = new HistoricoController();

module.exports = (app) => {
    const rotasHistorico = HistoricoController.rotas();
    app.post(rotasHistorico.requisicao, historicoController.requisicao());
    app.post(rotasHistorico.historicos, historicoController.historicos());
};