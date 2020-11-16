const { check } = require('express-validator/check');

class Cartao {
    static validacoes() {
        return [
            check('apelido').isLength({ min:0}).withMessage('O apelido não pode estar vazio!'),
            check('rfid').isLength({ min:0}).withMessage('O rfid não pode estar vazio!')
        ];
    }
}

module.exports = Cartao;