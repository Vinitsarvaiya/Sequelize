'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    static associate({auther}) {
      this.belongsToMany(auther, { through: 'AuthorBooks' });
    }
  }
  book.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};