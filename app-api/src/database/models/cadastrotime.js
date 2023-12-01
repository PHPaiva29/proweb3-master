'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadastroTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CadastroTime.init({
    nome: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    esporte: DataTypes.STRING,
    tecnico: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CadastroTime',
  });
  return CadastroTime;
};