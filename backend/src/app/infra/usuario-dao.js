class UsuarioDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(usuario) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO usuario (
                    apelido, 
                    rfid
                ) values (?,?)
                `,
                [
                    cartao.apelido,
                    cartao.rfid
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o cartão!');
                    }

                    resolve();
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

    atualiza(cartao) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE cartao SET
                apelido = ?,
                rfid = ?
                WHERE id = ?
            `,
            [
                usuario.nome,
                livro.rfid,
                livro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o usuario!');
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
                    FROM usuario
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        return reject('Não foi possível remover o usuário!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = UsuarioDao;