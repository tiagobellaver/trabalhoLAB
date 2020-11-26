const { check } = require('express-validator/check');

class Usuario {
    static validacoes() {
        return [
            check('nome').not().isEmpty().withMessage("O campo nome não pode estar vazio"),
            check('email').not().isEmpty().isEmail().withMessage("Email inválido"),
            check('senha').not().isEmpty().isLength({ min: 5 }).withMessage("A senha deve ter no mínimo 5 caracteres"),
            check('image').optional().isURL().withMessage("O campo imagem deve ser um link"),
        ];
    }
    static senha() {
        return [
            check('senha').not().isEmpty().isLength({ min: 5 }).withMessage("A senha deve ter no mínimo 5 caracteres"),
        ];
    }
    static login() {
        return [
            check('email').not().isEmpty().isEmail().withMessage("Email inválido"),
            check('senha').not().isEmpty().isLength({ min: 5 }).withMessage("Senha inválida"),
        ];
    }
}

module.exports = Usuario;