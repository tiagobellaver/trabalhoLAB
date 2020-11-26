const { check } = require('express-validator/check');

class Historico {
    static validacoes() {
        return [
            check('apelido').not().isEmpty().withMessage('O apelido não pode estar vazio!')
        ];
    }

    static dispositivo_cartao() {
        return [
            check('dispositivo').not().isEmpty().withMessage('O dispositivo não pode estar vazio!'),
            check('cartao').not().isEmpty().withMessage('O cartão não pode estar vazio!'),
            check('autorizado').not().isEmpty().not().isIn([1,0]).withMessage('O campo autorizado está com valor inválido!')
        ];
    }

    static remove_dispositivo_cartao() {
        return [
            check('dispositivo').not().isEmpty().withMessage('O dispositivo não pode estar vazio!'),
            check('cartao').not().isEmpty().withMessage('O cartão não pode estar vazio!')
        ];
    }
}

module.exports = Historico;