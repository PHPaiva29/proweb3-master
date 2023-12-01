'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CadastroPartida', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventoNome: {
          type: Sequelize.STRING,
          references: {
            model: 'CadastroEvento',
            key: 'nome',
            as: 'eventoNome',
          }
      },
      timeA: {
        type: Sequelize.STRING
      },
      timeB: {
        type: Sequelize.STRING
      },
      tecnicoA: {
        type: Sequelize.STRING
      },
      tecnicoB: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CadastroPartida');
  }
};