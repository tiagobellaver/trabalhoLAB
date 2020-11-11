const UsuarioControlador = require('../controllers/usuario-controller');
const usuarioControlador = new UsuarioControlador();

const Usuario = require('../models/usuario');

module.exports = (app) => {
    const rotasUsuario = UsuarioControlador.rotas();
    
    app.get(rotasUsuario.lista, usuarioControlador.lista());
    app.get(rotasUsuario.mostrar, usuarioControlador.mostrarUsuario());
    app.route(rotasUsuario.cadastro).post(Usuario.validacoes(), usuarioControlador.cadastra());
    app.route(rotasUsuario.edicao).put(Usuario.validacoes(), usuarioControlador.edita());
    app.delete(rotasUsuario.deletar, usuarioControlador.remove());
};