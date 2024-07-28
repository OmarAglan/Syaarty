'use strict';

const { Sequelize } = require('sequelize');
const { sequelize } = require('../../config/database');
module.exports = sequelize.define(
  'User',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userType: {
      type: Sequelize.ENUM('0', '1')
    },
    userName: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    recoveryPass: {
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
    modelName: 'User',
    timestamps: true,
    paranoid: true
  }
);
