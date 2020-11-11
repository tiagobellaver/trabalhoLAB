const { check } = require('express-validator/check');

class Dispositivo {
    static validacoes() {
        return [
            check('apelido').isLength({ min: 0 }).withMessage('O apelido não pode estar vazio!'),
            check('usuario_id').isNumeric().withMessage('O usuário não está correto!'),
        ];
    }
}

module.exports = Dispositivo;