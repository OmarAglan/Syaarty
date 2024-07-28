'use strict';
const { Sequelize } = require('sequelize');
const { sequelize } = require('../config/database');
module.exports = sequelize.define(
  'Cars',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    numberExists: {
      type: Sequelize.INTEGER
    },
    brand: {
      type: Sequelize.STRING
    },
    brandModel: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.STRING
    },
    fuel: {
      type: Sequelize.STRING
    },
    transmission: {
      type: Sequelize.STRING
    },
    photoPath: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  },
  {
    freezeTableName: true,
    modelName: 'Cars',
    timestamps: true,
    paranoid: true
  }
);
