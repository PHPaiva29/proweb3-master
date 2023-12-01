'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CadastroResultado', {
      CadastroEventoNome: {
        type: Sequelize.STRING,
        references: {
          model: 'CadastroEvento',
          key: 'nome',
          as: 'CadastroEventoNome',
        }
    },
      timeA: {
        type: Sequelize.STRING
      },
      timeB: {
        type: Sequelize.STRING
      },
      timeAPontos: {
        type: Sequelize.STRING
      },
      timeBPontos: {
        type: Sequelize.STRING
      },
      nome: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CadastroResultado');
  }
};