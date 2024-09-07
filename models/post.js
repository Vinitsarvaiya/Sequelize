'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User,{foreignKey:'userId',as:'user '})  
    }
  }
  post.init({
    body: DataTypes.STRING,
    userId:DataTypes.INTEGER,
    password:{type:DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'post',
    tableName:'posts',
  });
  return post;
};