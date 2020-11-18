const { validationResult } = require('express-validator/check');
const HistoricoDao = require('../infra/historico-dao');
const CartaoDao = require('../infra/cartao-dao');
const db = require('../../config/database');
const historicoDao = new HistoricoDao(db);
const cartaoDao = new CartaoDao(db);

class HistoricoController {

    static rotas() {
        return {
            requisicao: '/api/historico/requisicao',
            historicos: '/api/historicos',
            mostrarDetalhes: '/api/historico/:id'
        };
    }

    requisicao() {
        return function(req, resp) {
            console.log(req.body);
            cartaoDao.buscaPorRfid(req.body.rfid)
                .then(cartao => {
                    if(cartao == null || cartao == ""){
                        cartaoDao.adiciona("Cartão não registrado", req.body.rfid, null)
                            .then(cartaoId =>{
                                historicoDao.gravarHistorico(cartaoId, req.body.dispositivo, 0);
                                return resp.json({autorizado:false});
                            }).catch(erro => {
                                resp.status(500).end();
                                console.log(erro);
                            });;
                    }else{
                        historicoDao.verificarAutorizado(req.body.rfid, req.body.dispositivo)
                            .then(autorizado =>{
                                console.log(autorizado);
                                console.log(cartao);
                                var aut_bool = false;
                                var aut_num = 0;
                                if(autorizado == null || autorizado == ""){
                                    aut_bool = false;
                                    aut_num = 0;
                                }
                                else if(autorizado.autorizado){
                                    aut_bool = true;
                                    aut_num = 1;
                                }
                                historicoDao.gravarHistorico(cartao.id, req.body.dispositivo, aut_num);
                                return resp.json({autorizado:aut_bool});
                            }).catch(erro => {
                                resp.status(500).end();
                                console.log(erro);
                            });;
                    }
                })
                .catch(erro => {
                    resp.status(500).end();
                    console.log(erro);
                });
        };
    }

    historicos() {
        return function(req, resp) {
            historicoDao.lista()
                    .then(dispositivos => {
                        return resp.json({dispositivos:dispositivos});
                    })
                    .catch(erro => {
                        resp.status(500).end();
                        console.log(erro);
                    });
        };
    }

    mostrarDetalhes() {
        return function(req, resp) {
            historicoDao.buscaPorId(req.params.id)
                    .then( historico => {
                        return resp.json({historico:historico});
                    })
                    .catch(erro => {
                        resp.status(500).end()
                        console.log(erro);
                    });
        };
    }
}

module.exports = HistoricoController;