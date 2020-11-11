const { check } = require('express-validator/check');

class Cartao {
    static validacoes() {
        return [
            check('apelido').isLength({ min: 0 }).withMessage('O apelido não pode estar vazio!'),
            check('rfid').isLength({ min: 0 }).withMessage('O campo rfid não pode estar vazio!'),
            check('usuario_id').isNumeric().withMessage('O usuário não está correto!'),
        ];
    }
}

module.exports = Cartao;