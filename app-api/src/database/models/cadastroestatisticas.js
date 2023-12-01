'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadastroEstatisticas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CadastroEstatisticas.belongsTo(models.CadastroResultado);
    }
  }
  CadastroEstatisticas.init({
    CadastroEventoNome: DataTypes.STRING,
    partidaNome: {
      type: DataTypes.STRING,
      references: {
        model: 'CadastroResultado',
        key: 'nome',
        as: 'partidaNome',
      }
    },
    melhorJogador: DataTypes.STRING,
    quantidadePontos: DataTypes.STRING,
    faltas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CadastroEstatisticas',
  });
  return CadastroEstatisticas;
};