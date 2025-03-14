const Sequelize = require('sequelize')
const sequelize = new Sequelize('projetoWeb', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

