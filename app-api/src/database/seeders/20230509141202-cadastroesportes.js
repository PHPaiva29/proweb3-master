'use strict';

/* @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("CadastroEsportes", [
      {
        nome: "volei",
        descricao: "teste seed",
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CadastroEsportes", null, {});
  },
};
