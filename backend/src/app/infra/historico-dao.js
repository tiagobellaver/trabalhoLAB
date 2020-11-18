const { response } = require("../../config/custom-express");

class HistoricoDao {

    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM historico',
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
                    FROM historico
                    WHERE id = ?
                `,
                [id],
                (erro, historico) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o historico!');
                    }
                    return resolve(historico);
                }
            );
        });
    }

    gravarHistorico(cartaoId, dispositivo, autorizado) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO historico (
                    cartao, 
                    dispositivo,
                    autorizado
                ) values (?,?,?)
                `,
                [
                    cartaoId,
                    dispositivo,
                    autorizado
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível gravar o histórico!');
                    }

                    resolve();
                }
            )
        });
    }
    verificarAutorizado(rfid, dispositivo){
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT cartao_dispositivo.autorizado
                    FROM cartao_dispositivo
                    INNER JOIN cartao on cartao_dispositivo.cartao = cartao.id
                    WHERE cartao_dispositivo.dispositivo = ? and cartao.rfid = ?
                `,
                [
                    dispositivo,
                    rfid
                ],
                (erro, historico) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o historico!');
                    }
                    return resolve(historico);
                }
            );
        });
    }

}

module.exports = HistoricoDao;