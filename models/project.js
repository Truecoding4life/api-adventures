const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull:false,
  },

  description: {

    type: DataTypes.TEXT,
    allowNull:false,
  },
  deployed_url:{
    type: DataTypes.STRING,
    allowNull:true,
    isUrl: true
  },
  repo_url:{
    type: DataTypes.STRING,
    allowNull:true,
    isUrl: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  }
  ,
  {
    sequelize,
    freezeTableName: true,
    underscored: false,
    modelName: 'project',
  }
);

module.exports = Project;
