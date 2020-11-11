const { validationResult } = require('express-validator/check');

const UsuarioDao = require('../infra/usuario-dao');
const db = require('../../config/database');
const usuarioDao = new UsuarioDao(db);

class UsuarioControlador {

    static rotas() {
        return {
            lista: '/api/usuarios',
            mostrar: '/api/usuario/:id',
            cadastro: '/api/usuario/adicionar',
            edicao: '/api/usuario/editar/:id',
            deletar: '/api/usuario/deletar/:id'
        };
    }

    lista() {
        return function(req, resp) {
            console.log(req.body.usuario);
            usuarioDao.lista()
                    .then(usuarios => {
                        return resp.json({usuarios:usuarios});
                    })
                    .catch(erro => {
                        resp.status(500).end()
                        console.log(erro);
                    });
        };
    }

    mostrarUsuario() {
        return function(req, resp) {
            usuarioDao.buscaPorId(req.params.id)
                    .then(usuario => {
                        return resp.json({usuario:usuario});
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
    
            usuarioDao.adiciona(req.body)
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
            usuarioDao.atualiza(req)
                    .then(()=>{
                        return resp.status(200).end();
                    })
                    .catch(erro => {
                        resp.status(500).end();
                        console.log(erro);
                    });
        };
    }

    remove() {
        return function(req, resp) {
            const id = req.params.id;
            usuarioDao.remove(id)
                    .then(() => resp.status(200).end())
                    .catch(erro => {
                        resp.status(500).end();
                        console.log(erro);
                    });
        };
    }
}

module.exports = UsuarioControlador;