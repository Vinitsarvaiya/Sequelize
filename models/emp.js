'use strict';
const {
  Model,
  Sequelize 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class emp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  emp.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type:DataTypes.STRING,
      comment:'jcjx',
      defaultValue:"luck",
      onUpdate:"sss",
      allowNull:false,
      validate:{
        len:{
          args:[2,10],
          msg:"length must be 10 char"
        },
        notContains:{
          args:'@',
          msg:"not allowe"
        },
        notIn:{
          args:[['@','#','&','^','$','!','*','-','+','/','~']],
          msg:"special character not allowed"
        },
        notEmpty:{
          msg:"empty is not allow"
        },
        isAlpha:{
          msg:"This field can only contain letters"
        },
        notNull:{
          msg:'null is not allowed'
        },
        // isIn:{
        //   args:[['vinit','aniket']],
        //   msg:"not in array"
        // },
        // isUppercase:{
        //   msg:'must in uppercase'
        // },
        // isLowercase:{
        //   msg:'must in lowercase'
        // },
      }
    },
    email:{ 
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          msg:"this must be email"
        }
      }
    },
    age: { 
      type:DataTypes.INTEGER,
      validate:{
        customevalidator(value){
          if(value >= 150)
          {
            throw new Error("value is more than 150")
          }
        },
        // isevenNumber(value){
        //   if(value % 2 != 0)
        //   {
        //     throw new Error("value is odd number")
        //   }
        // },
        max:{
          args:150,
          msg:"less than 150"
        },
        min:{
          args:1,
          msg:"more than 1"
        },
        isNumeric:{
          msg:'its can only contain number'
        },
        // isFloat:{
        //   msg:'age must be float'
        // },
        // isInt: {
        //   msg: 'Age must be an integer.',
        // },
        // is:{
        //   args: /^(?:[1-9]|[1-9][0-9]|1[0-9][0-9]|200)$/,
        //   msg: "Age must be a number between 1 and 200.",
        // }
      }
    },
    status: DataTypes.BOOLEAN,
    dob:{
      type: DataTypes.DATE,
      validate:{
        isDate:{
          args:true,
          msg:"is only allowed date"
        },
        // isAfter:{
        //   args:"2011-11-05",
        //   msg:"only after 2011-11-05 allowed"
        // },
        // isBefore:{
        //   args:"2011-11-05",
        //   msg:"only before 2011-11-05 allowed"
        // }
      }
    }
  }, {
    sequelize,
    validate:{
      customemodelvalidator(){
        if((this.age) == (this.name))
        {
          throw new Error('age and name are not suppos to match')
        }
      }
    },
    modelName: 'emp',
    tableName:'emp',
    scopes:{
      employeeStatus:{
        where:{
          status:true
        }
      }
    }
  });
  return emp;
};