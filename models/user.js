const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required:true,
    unique: true
  },
  password:{
    type: String,
    required:true

  },
});

module.exports= mongoose.model('user', userSchema);














// const Sequelize = require('sequelize')

// const sequelize= require('../util/database')

// const ExpenseTracker = sequelize.define('user',{
//     id:{
//         type:Sequelize.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true
//     },
//     name:{
//         type:Sequelize.STRING,
//         allowNull:false,
//     },
//     email:{
//         type:Sequelize.STRING,
//         unique:true,
//         allowNull:false

//     },
//     password:{
//         type:Sequelize.STRING,
//         allowNull:false
//     },    
//     premiumuser:{
//         type:Sequelize.BOOLEAN,
//         default:false
//     }

// })
// module.exports = ExpenseTracker