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
                ) values (?,?,?,?)
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
                        return reject('Não foi possível adicionar o usuário!');
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
                    if (erro) return reject('Não foi possível listar os usuarios!');

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

    atualiza(usuario) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE usuario SET
                nome = ?,
                email = ?,
                image = ?
                WHERE id = ?
            `,
            [
                usuario.body.nome,
                usuario.body.email,
                usuario.body.image,
                usuario.params.id
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

    alterarSenha(usuario) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE usuario SET
                senha = ?
                WHERE id = ?
            `,
            [
                usuario.body.senha,
                usuario.params.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível alterar a senha!');
                }

                resolve();
            });
        });
    }

    mostrarDispositivos(id) {
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                    SELECT dispositivo.id as "id", dispositivo.apelido as "apelido"
                    FROM dispositivo
                    INNER JOIN usuario on dispositivo.usuario = usuario.id
                    WHERE usuario.id = ?
                `,
                [id],
                (erro, dispositivo) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuario!');
                    }
                    return resolve(dispositivo);
                }
            );
        });
    }

    mostrarCartoes(id) {
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                SELECT cartao.id as "id", cartao.apelido as "apelido", cartao.rfid as "rfid"
                FROM cartao
                INNER JOIN usuario on cartao.usuario = usuario.id
                WHERE usuario.id = ?
            `,
                [id],
                (erro, cartoes) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuario!');
                    }
                    return resolve(cartoes);
                }
            );
        });
    }

    mostrarHistorico(id) {
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                SELECT historico.id as "id", historico.date as "Data", historico.autorizado as "autorizado",
                cartao.id as "cartao_id", cartao.apelido as "cartao_apelido", cartao.rfid as "cartao_rfid",
                dispositivo.id as "dispositivo_id", dispositivo.apelido as "dispositivo_apelido"
                FROM historico
                INNER JOIN dispositivo on historico.dispositivo = dispositivo.id
                INNER JOIN cartao on historico.dispositivo = dispositivo.id
                INNER JOIN usuario on dispositivo.usuario = usuario.id
                WHERE usuario.id = ?
            `,
                [id],
                (erro, cartoes) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuario!');
                    }
                    return resolve(cartoes);
                }
            );
        });
    }

    login(email) {
        return new Promise((resolve, reject) => {
            this._db.all(
                `
                SELECT senha
                FROM usuario
                WHERE email = ?
            `,
                [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível logar o usuario!');
                    }
                    return resolve(usuario);
                }
            );
        });
    }
}

module.exports = UsuarioDao;