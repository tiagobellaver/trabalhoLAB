class DispositivoDao {

    constructor(db) {
        this._db = db;
    }

    adiciona_usuario_dispositivo(usuario_id, lastId){
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO usuario_dispositivo (
                    usuario, 
                    dispositivo
                )
                values (?,?)
                `,
                [
                    usuario_id,
                    lastId
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o dispositivo!');
                    }
                    return resolve();
                }
            )
        });
    }

    adiciona(dispositivo) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO dispositivo (
                    apelido
                )
                values (?)
                `,
                [
                    dispositivo.apelido
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o dispositivo!');
                    }
                    return resolve(this.lastID);
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
                (erro, cartao) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o dispositivo!');
                    }
                    return resolve(cartao);
                }
            );
        });
    }

    atualiza(cartao) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE dispositivo SET
                apelido = ?
                WHERE id = ?
            `,
            [
                cartao.body.apelido,
                cartao.params.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o dispositivo!');
                }

                return resolve();
            });
        });
    }

    remove(id) {
        console.log(id);
        return new Promise((resolve, reject) => {
            this._db.run(
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
}

module.exports = DispositivoDao;