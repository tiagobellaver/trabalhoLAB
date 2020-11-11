class UsuarioDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(usuario) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO usuario (
                    nome, 
                    email,
                    senha,
                    image
                )
                values (?,?,?,?)
                `,
                [
                    usuario.nome,
                    usuario.email,
                    usuario.senha,
                    usuario.image
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o Usuário!');
                    }
                    resolve();
                }
            )  
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM usuario',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os usuários!');
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
                    FROM usuario
                    WHERE id = ?
                `,
                [id],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuario!');
                    }
                    return resolve(usuario);
                }
            );
        });
    }

    atualiza(cartao) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE usuario SET
                nome = ?,
                email = ?,
                image = ?
                WHERE id = ?
            `,
            [
                cartao.body.nome,
                cartao.body.email,
                cartao.body.image,
                cartao.params.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o cartão!');
                }

                return resolve();
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
                        return reject('Não foi possível remover o Usuário!');
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = UsuarioDao;