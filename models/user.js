'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({post}) {
      // define association here
      this.hasMany(post,{foreignKey:'userId',as:'posts'})
    }

    // toJSON(){
    //   return { ...this.get(),id:undefined}
    // }
  }
  User.init({
    uuid:DataTypes.UUID,
    name:{ 
      type:DataTypes.STRING,
      unique:true,  
      onUpdate:"sss",
      comment:"this is comment",
      

      set(value){
        this.setDataValue('name',value+'-data')
      },
      get(){
        return this.getDataValue('name').toUpperCase();
      }


    },
    email: {
      type:DataTypes.STRING,


      set(value)
      {
        const data = value.split('@')
        this.setDataValue('email', data[0] + '@gmail.com')
      },
      get(){
        const data = this.getDataValue('email').split('@')
        return data[0] +'@gmail.com'
      }

      
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    hooks:{
      // beforeCreate:(user,option)=>{
      //   console.log(user.name)
      //   user.name = "before",
      //   user.email = "before@gmail.com"
      // },
      // afterCreate:(user,option)=>{
      //   user.name = "after",
      //   user.email = "after@gmail.com"
      // },


      // beforeDestroy:(user,option)=>{
      //   console.log('before destroy')
      // },
      // afterDestroy:(user,option)=>{
      //   console.log('after destroy')
      // },


      beforeUpdate:(user,option)=>{
        console.log(user.name)
        user.name = "beforeupdate"
      },
      afterUpdate:(user,option)=>{
        user.name = "afterupdate"
      },

      // beforeSave:(user,option)=>{
      //   console.log(user.name)
      //   user.name = "beforesave"
      // },

      // afterSave:(user,option)=>{
      //   user.name = "aftersave"
      // },

      beforeFind:(user,option)=>{
        console.log('before find user')
      },

      afterFind:(user,option)=>{
        user.forEach(item=>(
          item.name = "ss"
        ))
      },
      // beforeSync:(user,option)=>{
      //   console.log('async')
      //   user.name ="before async"
      // }, 
      // afterSync:(user,option)=>{
      //   user.name="afterasync"
      // },
      // beforeValidate:(user,option)=>{
      //   console.log("bedore validation-console")
      //   user.name = "before - validate"
      // },
      // afterValidate:(user,option)=>{
      //   user.name = "after - validate"
      // },
      
      beforeBulkCreate:(user,option)=>{
        console.log('beforebulkcreate')
        user.forEach(item=>(
          item.name = item.name + 'sigh'
        ))
      },

      afterBulkCreate:(user,option)=>{
        console.log('AFTERBULKCREATE')
      }
      
    }
  });
  return User;
};