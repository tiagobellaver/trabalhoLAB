const CartaoControlador = require('../controllers/cartao-controller');
const cartaoControlador = new CartaoControlador();

const Cartao = require('../models/cartao');

module.exports = (app) => {
    const rotasCartao = CartaoControlador.rotas();
    
    app.get(rotasCartao.lista, cartaoControlador.lista());
    app.get(rotasCartao.mostrar, cartaoControlador.mostrarCartao());
    app.route(rotasCartao.cadastro).post(Cartao.validacoes(), cartaoControlador.cadastra());
    app.route(rotasCartao.edicao).put(Cartao.validacoes(), cartaoControlador.edita());
    app.delete(rotasCartao.deletar, cartaoControlador.remove());
};