const { check } = require('express-validator/check');

class Cartao {
    static validacoes() {
        return [
            check('nome').isLength({ min: 0 }).withMessage('O nome não pode estar vazio!'),
            check('senha').isLength({ min: 5 }).withMessage('A senha deve ter mais de 5 digitos!'),
            check('email').isEmail().withMessage('O email não é valido!'),
        ];
    }
}

module.exports = Cartao;