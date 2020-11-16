const { validationResult } = require('express-validator/check');
const HistoricoDao = require('../infra/historico-dao');
const db = require('../../config/database');
const historicoDao = new HistoricoDao(db);

class HistoricoController {

    static rotas() {
        return {
            requisicao: '/api/historico/requisicao',
            historicos: '/api/historicos'
        };
    }

    requisicao() {
        return function(req, resp) {
            console.log(req.body);
        };
    }

    historicos() {
        return function(req, resp) {
            historicoDao.lista()
                    .then(dispostivos => {
                        return resp.json({dispostivos:dispostivos});
                    })
                    .catch(erro => {
                        resp.status(500).end();
                        console.log(erro);
                    });
        };
    }
}

module.exports = HistoricoController;