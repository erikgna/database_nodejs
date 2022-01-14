'use stric'
module.exports = {
    up: (QueryInterface, Sequelize) =>{
        return QueryInterface.addColumn('Turmas', 'deletedAt', {
            allowNull: true,
            type: Sequelize.DATE
        })
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn('Turmas', 'deletedAt')
    }
}