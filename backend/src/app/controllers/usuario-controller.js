const { validationResult } = require('express-validator/check');

const UsuarioDao = require('../infra/usuario-dao');
const db = require('../../config/database');
const usuarioDao = new UsuarioDao(db);

class UsuarioControlador {

    static rotas() {
        return {
            lista: '/api/usuarios',
            mostrar: '/api/usuario/:id',
            cadastrar: '/api/usuario/adicionar',
            editar: '/api/usuario/editar/:id',
            deletar: '/api/usuario/deletar/:id',
            alterarSenha: '/api/usuario/senha/:id',
            mostrarDispositivos: '/api/usuario/:id/dispositivo',
            mostrarCartoes: '/api/usuario/:id/cartao',
            login: '/api/usuario/login',
            mostrarHistorico: '/api/usuario/:id/historico'
        };
    }

    lista() {
        return function(req, resp) {
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

    alterarSenha() {
        return function(req, resp) {
            usuarioDao.alterarSenha(req)
                .then(() => resp.status(200).end())
                .catch(erro => {
                    resp.status(500).end();
                    console.log(erro);
                });
        };
    }

    mostrarDispositivos() {
        return function(req, resp) {
            usuarioDao.mostrarDispositivos(req.params.id)
                .then(dispositivos => {
                    return resp.json({dispositivos:dispositivos});
                }).catch(erro => {
                    resp.status(500).end();
                    console.log(erro);
                });
        };
    }

    mostrarCartoes() {
        return function(req, resp) {
            usuarioDao.mostrarCartoes(req.params.id)
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
            usuarioDao.mostrarHistorico(req.params.id)
                .then(historico => {
                    return resp.json({historico:historico});
                }).catch(erro => {
                    resp.status(500).end();
                    console.log(erro);
                });
        };
    }

    login() {
        return function(req, resp) {
            usuarioDao.login(req.body.email)
                .then(usuario => {
                    if(usuario == null || usuario == ""){
                        return resp.json({loged:false, error:"Email não cadastrado"});
                    }else if(usuario[0].senha == req.body.senha){
                        return resp.json({loged:true, error:""});
                    }else{
                        return resp.json({loged:false, error:"Combinação incorreta de senha e email"});
                    }

                }).catch(erro => {
                    resp.status(500).end();
                    console.log(erro);
                });
        };
    }
}

module.exports = UsuarioControlador;