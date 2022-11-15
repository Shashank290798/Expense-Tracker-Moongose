const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    expense:{
    type: String,
    required:true
  },
  description:{
    type: String,
    required:true
  },
  category:{
    type: String,
    required:true
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'user',
    required:true
  }
});

module.exports= mongoose.model('Expense', expenseSchema);















// const Sequelize = require ('sequelize')
// const sequelize = require('../util/database')
// const Expense = sequelize.define('expense',{
//   id:{
//     type:Sequelize.INTEGER,
//     autoIncrement : true,
//     allowNull:false,
//     primaryKey:true
//   },
//   expense:Sequelize.STRING,

//   description:{
//     type:Sequelize.STRING,

  
//   },
//   category:{
//     type:Sequelize.STRING,

//   }
// })

// module.exports=Expense;