const { check, validationResult } = require('express-validator/check');
const CartaoControlador = require('../controllers/cartao-controller');
const cartaoControlador = new CartaoControlador();

const Cartao = require('../models/cartao');

module.exports = (app) => {
    const rotasCartao = CartaoControlador.rotas();
    app.get(rotasCartao.lista, cartaoControlador.lista());
    app.get(rotasCartao.mostrar, cartaoControlador.mostrarCartao());
    app.post(rotasCartao.cadastrar, Cartao.validacoes(), cartaoControlador.cadastra());
    app.put(rotasCartao.editar, Cartao.validacoes(), cartaoControlador.edita());
    app.delete(rotasCartao.deletar, cartaoControlador.remove());
};