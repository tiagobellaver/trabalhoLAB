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

}

module.exports = HistoricoDao;