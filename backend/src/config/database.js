const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE, 
    senha VARCHAR(255) NOT NULL,
    image VARCHAR(255) NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuario (
    nome, 
    email,
    senha
) SELECT 'Administrador', 'admin@admin.com', '12345' WHERE NOT EXISTS (SELECT * FROM usuario WHERE email = 'admin@admin.com')
`;

const CARTAO_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS cartao (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    apelido VARCHAR(255) NOT NULL, 
    rfid VARCHAR(255) NOT NULL UNIQUE,
    usuario VARCHAR(255) NULL,
    FOREIGN KEY(usuario) REFERENCES usuario(id) ON DELETE CASCADE
)
`;

const DISPOSTIVO_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS dispositivo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    apelido VARCHAR(255) NOT NULL,
    usuario VARCHAR(255) NULL,
    FOREIGN KEY(usuario) REFERENCES usuario(id) ON DELETE CASCADE
)
`;

const HISTORICO_SCHEMA = `
CREATE TABLE IF NOT EXISTS historico(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    date DATE default (datetime('now','localtime')),
    autorizado INTEGER DEFAULT 0,
    dispositivo INTEGER NOT NULL,
    cartao INTEGER NOT NULL,
    FOREIGN KEY(dispositivo) REFERENCES dispositivo(id) ON DELETE CASCADE,
    FOREIGN KEY(cartao) REFERENCES cartao(id) ON DELETE CASCADE
)
`;


const CARTAO_DISPOSITIVO_SCHEMA = `
CREATE TABLE IF NOT EXISTS cartao_dispositivo(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    autorizado INTEGER DEFAULT 1,
    dispositivo INTEGER NOT NULL,
    cartao INTEGER NOT NULL,
    FOREIGN KEY(dispositivo) REFERENCES dispositivo(id) ON DELETE CASCADE,
    FOREIGN KEY(cartao) REFERENCES cartao(id) ON DELETE CASCADE
)
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(DISPOSTIVO_SCHEMA);
    bd.run(HISTORICO_SCHEMA);
    bd.run(INSERIR_USUARIO_1);
    bd.run(CARTAO_SCHEMA);
    bd.run(CARTAO_DISPOSITIVO_SCHEMA );
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;