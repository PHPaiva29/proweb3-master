'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("CadastroTime", [
      {
        nome: "Os Azuis",
        esporte: "futebol",
        tecnico: "Messias",
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CadastroTime", null, {});
  }
};
