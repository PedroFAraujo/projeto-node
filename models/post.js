const db = require('./banco')

//Criação de Tabela
const Agendamentos = db.sequelize.define("agendamentos", {
    nome: {
        type: db.Sequelize.STRING,
    },
    telefone: {
        type: db.Sequelize.STRING,
    },
    origem: {
        type: db.Sequelize.STRING,
    },
    data_contato: {
        type: db.Sequelize.DATE,
    },
    observacao: {
        type: db.Sequelize.TEXT,
    }
})

//Agendamentos.sync({force: true})

module.exports = Agendamentos

Agendamentos.create({
    nome: "Pedro",
    email: "teste@gmail.com",
    telefone: "1123456789",
    cpf: "12345678900",
    data: "2025-02-27",
    hora: "20:38",
});