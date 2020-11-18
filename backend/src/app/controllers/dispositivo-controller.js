const { validationResult } = require('express-validator/check');

const DispostivoDao = require('../infra/dispositivo-dao');
const db = require('../../config/database');
const dispostivoDao = new DispostivoDao(db);

class DispositivoControlador {

    static rotas() {
        return {
            lista: '/api/dispositivos',
            mostrar: '/api/dispositivo/:id',
            cadastrar: '/api/dispositivo/adicionar',
            editar: '/api/dispositivo/editar/:id',
            deletar: '/api/dispositivo/deletar/:id',
            adicionarCartao: '/api/adicionarCartao',
            removerCartao: '/api/removerCartao',
            setarAutorizacao: '/api/setarAutorizacao',
            mostrarCartoes: '/api/dispositivo/:id/cartao',
            mostrarHistorico: '/api/dispositivo/:id/historico'
        };
    }

    lista() {
        return function(req, resp) {
            dispostivoDao.lista()
                    .then(dispostivos => {
                        return resp.json({dispostivos:dispostivos});
                    })
                    .catch(erro => {
                        resp.status(500).end();
                        console.log(erro);
                    });
        };
    }

    mostrarDispositivo() {
        return function(req, resp) {
            dispostivoDao.buscaPorId(req.params.id)
                    .then( dispostivo => {
                        return resp.json({dispostivo:dispostivo});
                    })
                    .catch(erro => {
                        resp.status(500).end()
                        console.log(erro);
                    });
        };
    }

    cadastra() {
        return function(req, resp) {
          
            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                return resp.json(erros.array());
            }

            dispostivoDao.adiciona(req.body)
                .then(() => {
                    return resp.status(200).end();
                }).catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }

    edita() {
        return function(req, resp) {
            dispostivoDao.atualiza(req)
                .then(()=>{
                    return resp.status(200).end();
                })
                .catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }

    adicionarCartao() {
        return function(req, resp) {
            dispostivoDao.adicionarCartao(req)
                .then(()=>{
                    return resp.status(200).end();
                })
                .catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }
    removerCartao() {
        return function(req, resp) {
            dispostivoDao.removerCartao(req)
                .then(()=>{
                    return resp.status(200).end();
                })
                .catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }

    setarAutorizacao() {
        return function(req, resp) {
            dispostivoDao.setarAutorizacao(req)
                .then(()=>{
                    return resp.status(200).end();
                })
                .catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }

    remove() {
        return function(req, resp) {
            const id = req.params.id;
            dispostivoDao.remove(id)
                .then(() => resp.status(200).end())
                .catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }
    mostrarCartoes() {
        return function(req, resp) {
            dispostivoDao.mostrarCartoes(req.params.id)
                .then(cartoes => {
                    return resp.json({cartoes:cartoes});
                }).catch(erro => {
                    resp.status(500).end();
                    console.log(erro);
                });
        };
    }
    mostrarHistorico() {
        return function(req, resp) {
            dispostivoDao.mostrarHistorico(req.params.id)
                .then(historico => {
                    return resp.json({historico:historico});
                }).catch(erro => {
                    resp.status(500).end();
                    console.log(erro);
                });
        };
    }
}

module.exports = DispositivoControlador;