const { response } = require("../../config/custom-express");

class HistoricoDao {

    constructor(db) {
        this._db = db;
    }


    dashboard_historico(){
        return new Promise((resolve, reject) => {
            this._db.all(
                `SELECT historico.id as "id", historico.date as "date", historico.autorizado as "autorizado",
                dispositivo.id as "dispositivo_id", dispositivo.apelido as "dispositivo_apelido",
                cartao.id as "cartao_id", cartao.apelido as "cartao_apelido",
                usuario.id as "usuario_id", usuario.nome as "usuario_nome"
                FROM historico
                INNER JOIN dispositivo on historico.dispositivo = dispositivo.id
                INNER JOIN cartao on historico.cartao = cartao.id
                LEFT JOIN usuario on cartao.usuario = usuario.id
                ORDER BY historico.id DESC LIMIT 5
                `,
                (erro, resultados) => {
                    console.log(resultados);
                    if (erro) return reject('Não foi possível listar os cartoes!');

                    return resolve(resultados);
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                `SELECT historico.id as "id", historico.date as "date", historico.autorizado as "autorizado",
                dispositivo.id as "dispositivo_id", dispositivo.apelido as "dispositivo_apelido",
                cartao.id as "cartao_id", cartao.apelido as "cartao_apelido",
                usuario.id as "usuario_id", usuario.nome as "usuario_nome"
                FROM historico
                INNER JOIN dispositivo on historico.dispositivo = dispositivo.id
                INNER JOIN cartao on historico.cartao = cartao.id
                LEFT JOIN usuario on cartao.usuario = usuario.id
                ORDER BY historico.id DESC
                `,
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
                    SELECT historico.id as "id", historico.date as "date", historico.autorizado as "autorizado",
                    dispositivo.id as "dispositivo_id", dispositivo.apelido as "dispositivo_apelido",
                    cartao.id as "cartao_id", cartao.apelido as "cartao_apelido",
                    usuario.id as "usuario_id", usuario.nome as "usuario_nome"
                    FROM historico
                    INNER JOIN dispositivo on historico.dispositivo = dispositivo.id
                    INNER JOIN cartao on historico.cartao = cartao.id
                    LEFT JOIN usuario on cartao.usuario = usuario.id
                    WHERE historico.id = ?
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

    adicionarCartao(cartao, dispositivo, autorizado) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO cartao_dispositivo (
                    dispositivo, 
                    cartao,
                    autorizado
                ) values (?,?,?)
                `,
                [
                    dispositivo,
                    cartao,
                    autorizado
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
}

module.exports = HistoricoDao;