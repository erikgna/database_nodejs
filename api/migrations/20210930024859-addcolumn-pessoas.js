'use stric'
module.exports = {
    up: (QueryInterface, Sequelize) =>{
        return QueryInterface.addColumn('Pessoas', 'deletedAt', {
            allowNull: true,
            type: Sequelize.DATE
        })
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn('Pessoas', 'deletedAt')
    }
}