'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadastroEvento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CadastroEvento.hasMany(models.CadastroPartida);
    }
  }
  CadastroEvento.init({
    nome: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    esporte: DataTypes.STRING,
    data: DataTypes.DATE,
    hora: DataTypes.TIME,
    local: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CadastroEvento',
  });
  return CadastroEvento;
};