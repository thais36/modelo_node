const db = require("./banco")

const Agendamentos = db.sequelize.define('agendamentos', {
    nome:{
        type: db.Sequelize.STRING
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    bairro:{
        type: db.Sequelize.STRING
    },
    cep:{
        type: db.Sequelize.INTEGER
    },
    cidade:{
        type: db.Sequelize.STRING
    },
    estado:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    celular:{
        type: db.Sequelize.STRING
    },
})

//Agendamentos.sync({force: true})

module.exports = Agendamentos