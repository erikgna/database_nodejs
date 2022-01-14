'use stric'
module.exports = {
    up: (QueryInterface, Sequelize) =>{
        return QueryInterface.addColumn('Niveis', 'deletedAt', {
            allowNull: true,
            type: Sequelize.DATE
        })
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn('Niveis', 'deletedAt')
    }
}