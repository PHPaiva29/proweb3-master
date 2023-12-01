'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("CadastroTecnico", [
      {
        nome: "Messias",
        esporte: "futebol",
        telefone: "(11)32222-2222",
        email: "exemplo.com",
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CadastroTecnico", null, {});
  }
};
