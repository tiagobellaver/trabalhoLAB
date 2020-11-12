const UsuarioControlador = require('../controllers/usuario-controller');
const usuarioControlador = new UsuarioControlador();

const Usuario = require('../models/usuario');

module.exports = (app) => {
    const rotasUsuario = UsuarioControlador.rotas();
    app.get(rotasUsuario.lista, usuarioControlador.lista());
    app.get(rotasUsuario.mostrar, usuarioControlador.mostrarUsuario());
    app.post(rotasUsuario.cadastrar, Usuario.validacoes(), usuarioControlador.cadastra());
    app.put(rotasUsuario.editar, Usuario.validacoes(), usuarioControlador.edita());
    app.delete(rotasUsuario.deletar, usuarioControlador.remove());
    app.post(rotasUsuario.alterarSenha, usuarioControlador.alterarSenha());
    app.get(rotasUsuario.mostrarDispositivos, usuarioControlador.mostrarDispositivos());
    app.get(rotasUsuario.mostrarCartoes, usuarioControlador.mostrarCartoes());
};