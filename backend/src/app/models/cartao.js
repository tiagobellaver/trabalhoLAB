const { check } = require('express-validator/check');

class Cartao {
    static validacoes() {
        return [
            check('apelido').not().isEmpty().withMessage('O apelido não pode estar vazio!'),
            check('rfid').not().isEmpty().withMessage('O rfid não pode estar vazio!')
        ];
    }
}

module.exports = Cartao;