const { response } = require("../../config/custom-express");

class DispositivoDao {

    constructor(db) {
        this._db = db;
    }
    
    adiciona(dispositivo) {
        console.log(dispositivo);
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO dispositivo (
                    apelido, 
                    usuario
                ) values (?,?)
                `,
                [
                    dispositivo.apelido,
                    dispositivo.usuario_id
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o dispositivo!');
                    }

                    resolve();
                }
            )
        });
    }

    adicionarCartao(req) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO cartao_dispositivo (
                    dispositivo, 
                    cartao,
                    autorizado
                ) values (?,?,?)
                `,
                [
                    req.body.dispositivo,
                    req.body.cartao,
                    req.body.autorizado
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o cartão a este dispositivo!');
                    }

                    resolve();
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM dispositivo',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os dispositivos!');

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
                    FROM dispositivo
                    WHERE id = ?
                `,
                [id],
                (erro, dispositivo) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o dispositivo!');
                    }
                    return resolve(dispositivo);
                }
            );
        });
    }

    atualiza(dispositivo) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE dispositivo SET
                apelido = ?
                WHERE id = ?
            `,
            [
                dispositivo.body.apelido,
                dispositivo.params.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o dispositivo!');
                }

                resolve();
            });
        });
    }

    setarAutorizacao(req) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE cartao_dispositivo SET
                autorizado = ?
                WHERE dispositivo = ? and cartao = ?
            `,
            [
                req.body.autorizado,
                req.body.dispositivo,
                req.body.cartao
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar a autorização!');
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
                    FROM dispositivo
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o dispositivo!');
                    }
                    return resolve();
                }
            );
        });
    }

    removerCartao(req) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE 
                    FROM cartao_dispositivo
                    WHERE dispositivo = ? and cartao = ?
                `,
                [
                    req.body.dispositivo,
                    req.body.cartao
                ],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o cartao deste dispositivo!');
                    }
                    return resolve();
                }
            );
        });
    }

    mostrarCartoes(id) {
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                SELECT cartao.id as "id", cartao.apelido as "apelido", cartao.rfid as "rfid", cartao_dispositivo.autorizado
                FROM cartao_dispositivo
                INNER JOIN dispositivo on cartao_dispositivo.dispositivo = dispositivo.id
                INNER JOIN cartao on cartao_dispositivo.cartao = cartao.id
                WHERE dispositivo.id = ?
            `,
                [id],
                (erro, cartoes) => {
                    if (erro) {
                        console.log(erro);
                        return reject('Não foi possível encontrar os cartões!');
                    }
                    return resolve(cartoes);
                }
            );
        });
    }
}

module.exports = DispositivoDao;