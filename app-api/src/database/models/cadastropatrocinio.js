'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadastroPatrocinio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CadastroPatrocinio.init({
    nome: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    descricao: DataTypes.STRING,
    valor:DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'CadastroPatrocinio',
  });
  return CadastroPatrocinio;
};