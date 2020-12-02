const { check, validationResult } = require('express-validator/check');

const CartaoDao = require('../infra/cartao-dao');
const db = require('../../config/database');
const cartaoDao = new CartaoDao(db);

class CartaoControlador {

    static rotas() {
        return {
            lista: '/api/cartoes',
            mostrar: '/api/cartao/:id',
            cadastrar: '/api/cartao/adicionar',
            editar: '/api/cartao/editar/:id',
            deletar: '/api/cartao/deletar/:id',
            alterarUsuario: '/api/cartao/alterarUsuario/:id'
        };
    }

    lista() {
        return function(req, resp) {
            cartaoDao.lista()
                    .then(cartoes => {
                        return resp.json({cartoes:cartoes});
                    })
                    .catch(erro => {
                        resp.status(500).end();
                        console.log(erro);
                    });
        };
    }

    mostrarCartao() {
        return function(req, resp) {
            cartaoDao.buscaPorId(req.params.id)
                    .then(cartao => {
                        return resp.json({cartao:cartao});
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

            cartaoDao.adiciona(req.body.apelido, req.body.rfid, req.body.usuario_id)
                .then(lastId => {
                    return resp.status(200).end();
                }).catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }

    edita() {
        return function(req, resp) {

            const erros = validationResult(req);
            if (!erros.isEmpty()) {
                return resp.json(erros.array());
            }
            
            cartaoDao.atualiza(req)
                .then(()=>{
                    return resp.status(200).end();
                })
                .catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }

    alterarUsuario() {
        return function(req, resp) {
            cartaoDao.alterarUsuario(req)
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
            cartaoDao.remove(id)
                .then(() => resp.status(200).end())
                .catch(erro => {
                    resp.status(500).end()
                    console.log(erro);
                });
        };
    }
}

module.exports = CartaoControlador;