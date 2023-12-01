'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CadastroPartida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CadastroPartida.belongsTo(models.CadastroEvento);
    }
  }
  CadastroPartida.init({
    eventoNome: {
      type: DataTypes.STRING,
      references: {
        model: 'CadastroEvento',
        key: 'nome',
        as: 'eventoNome',
      }
    },
    timeA: DataTypes.STRING,
    timeB: DataTypes.STRING,
    tecnicoA: DataTypes.STRING,
    tecnicoB: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CadastroPartida',
  });
  return CadastroPartida;
};
