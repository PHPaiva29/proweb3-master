'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CadastroEvento', {
      nome: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      esporte: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      hora: {
        type: Sequelize.TIME
      },
      local: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CadastroEvento');
  }
};
