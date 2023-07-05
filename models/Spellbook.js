const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spellbook extends Model {}

Spellbook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    spell: {
      type: DataTypes.STRING,
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'character',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'spellbook',
  }
);

module.exports = Spellbook;