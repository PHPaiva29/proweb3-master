'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("CadastroJogador", [
      {
        nome: "Paulinho",
        esporte: "futebol",
        time: "aguas claras",
        telefone: "(11)34444-5555",
        email: "exemplo2.com",
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CadastroJogador", null, {});
  }
};
