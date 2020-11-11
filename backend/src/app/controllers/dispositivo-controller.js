const { validationResult } = require('express-validator/check');

const DispositivoDao = require('../infra/dispositivo-dao');
const db = require('../../config/database');
const dispositivoDao = new DispositivoDao(db);

class DispositivoControlador {

    static rotas() {
        return {
            lista: '/api/dispositivos',
            mostrar: '/api/dispositivo/:id',
            cadastro: '/api/dispositivo/adicionar',
            edicao: '/api/dispositivo/editar/:id',
            deletar: '/api/dispositivo/deletar/:id'
        };
    }

    lista() {
        return function(req, resp) {
            console.log(req.body.usuario);
            dispositivoDao.lista()
                    .then(dispositivos => {
                        return resp.json({dispositivos:dispositivos});
                    })
                    .catch(erro => {
                        resp.status(500).end()
                        console.log(erro);
                    });
        };
    }

    mostrarDispositivo() {
        return function(req, resp) {
            dispositivoDao.buscaPorId(req.params.id)
                    .then(dispositivo => {
                        return resp.json({dispositivo:dispositivo});
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
    
            dispositivoDao.adiciona(req.body)
                    .then(lastId => {
                        dispositivoDao.adiciona_usuario_dispositivo(req.body.usuario_id, lastId).then(()=>{
                            return resp.status(200).end();
                        }).catch(erro => {
                            resp.status(500).end()
                            console.log(erro);
                        });
                    }).catch(erro => {
                        resp.status(500).end()
                        console.log(erro);
                    });
        };
    }

    edita() {
        return function(req, resp) {
            dispositivoDao.atualiza(req)
                    .then(()=>{
                        return resp.status(200).end();
                    })
                    .catch(erro => {
                        resp.status(200).end()
                        console.log(erro);
                    });
        };
    }

    remove() {
        return function(req, resp) {
            const id = req.params.id;
            dispositivoDao.remove(id)
                    .then(() => resp.status(200).end())
                    .catch(erro => {
                        resp.status(200).end()
                        console.log(erro);
                    });
        };
    }
}

module.exports = DispositivoControlador;