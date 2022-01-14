'use stric'
module.exports = {
    up: (QueryInterface, Sequelize) =>{
        return QueryInterface.addColumn('Matriculas', 'deletedAt', {
            allowNull: true,
            type: Sequelize.DATE
        })
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn('Matriculas', 'deletedAt')
    }
}