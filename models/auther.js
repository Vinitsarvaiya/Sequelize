'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class auther extends Model {
    static associate({book}) {
      this.belongsToMany(book, { through: 'AuthorBooks' });
    }
  }
  auther.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'auther',
  });
  return auther;
};