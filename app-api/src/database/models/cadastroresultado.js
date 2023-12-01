'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadastroResultado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CadastroResultado.belongsTo(models.CadastroEvento);
      CadastroResultado.hasOne(models.CadastroEstatisticas);
    }
  }
  CadastroResultado.init({
    CadastroEventoNome: {
      type: DataTypes.STRING,
      references: {
        model: 'CadastroEvento',
        key: 'nome',
        as: 'CadastroEventoNome',
      }
    },
    timeA: DataTypes.STRING,
    timeB: DataTypes.STRING,
    timeAPontos: DataTypes.STRING,
    timeBPontos: DataTypes.STRING,
    nome: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'CadastroResultado',
  });
  return CadastroResultado;
};