const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Features extends Model {}

Features.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ideals: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    personality_traits: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bonds: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    flaws: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    features: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    proficiencies: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    languages: {
        type: DataTypes.STRING,
        allowNull: true,
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
    modelName: 'features',
  }
);

module.exports = Features;