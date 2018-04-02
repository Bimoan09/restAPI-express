'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('bukus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      judul: {
        allowNull: false,
        type: Sequelize.STRING
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      penerbit:{
        allowNull: false,
        type: Sequelize.STRING,

      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
     
    }, {
      underscored:true,
      timestamps: true
    }
  ),

  down: queryInterface => queryInterface.dropTable('buku')
};
