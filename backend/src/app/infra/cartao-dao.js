const { response } = require("../../config/custom-express");

class CartaoDao {

    constructor(db) {
        this._db = db;
    }
    
    adiciona(apelido, rfid, usuario_id) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO cartao (
                    apelido, 
                    rfid,
                    usuario
                ) values (?,?,?)
                `,
                [
                    apelido,
                    rfid,
                    usuario_id
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o cartão!');
                    }

                    return resolve(this.lastID);
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM cartao',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os cartoes!');

                    return resolve(resultados);
                }
            )
        });
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM cartao
                    WHERE id = ?
                `,
                [id],
                (erro, cartao) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o cartao!');
                    }
                    return resolve(cartao);
                }
            );
        });
    }

    buscaPorRfid(rfid) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM cartao
                    WHERE  rfid = ?
                `,
                [rfid],
                (erro, cartao) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o cartao!');
                    }
                    return resolve(cartao);
                }
            );
        });
    }

    alterarUsuario(cartao) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE cartao SET
                usuario = ?
                WHERE id = ?
            `,
            [
                cartao.body.usuario_id,
                cartao.params.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o cartão!');
                }

                resolve();
            });
        });
    }

    atualiza(cartao) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE cartao SET
                apelido = ?,
                rfid = ?
                WHERE id = ?
            `,
            [
                cartao.body.apelido,
                cartao.body.rfid,
                cartao.params.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o cartão!');
                }

                resolve();
            });
        });
    }

    remove(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE 
                    FROM cartao
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o cartão!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = CartaoDao;