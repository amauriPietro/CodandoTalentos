const db = require ('./db');

const medicamentos = db.sequelize.define('medicamentos', {
    Código: {
        type: db.Sequelize.STRING,
        primaryKey: true
    },
    PrincípioAtivo: {
        type: db.Sequelize.STRING
    },
    CNPJ: {
        type: db.Sequelize.STRING
    },
    Laboratório: {
        type: db.Sequelize.STRING
    },
    Registro: {
        type: db.Sequelize.STRING
    },
    Produto: {
        type: db.Sequelize.STRING
    },
    Apresentação: {
        type: db.Sequelize.STRING
    },
    ClasseTerapêutica: {
        type: db.Sequelize.STRING
    }
})

module.exports = medicamentos
//medicamentos.sync({force: true})