const express= require('express');

const expense =express();

const cors = require('cors');



const bodyparser =require('body-parser');

const mongoose = require('mongoose')

// const sequelize = require('./util/database');

const expenseRoutes = require('./routes/expense');

const orderModels = require('./models/order');

// const Forgotpassword = require('./models/forgetpassword');
// const resetPasswordRoutes = require('./routes/resetpassword')
const User = require('./models/user');

const expensedata = require('./models/expensedata')

expense.use(cors());

expense.use(bodyparser.json());

expense.use(expenseRoutes)

// expense.use('/password', resetPasswordRoutes);





// sequelize
// .sync()
// .then(result =>{
//     expense.listen(4000);
// })
// .catch(err =>{
//     console.log(err)
// })


mongoose.connect('mongodb+srv://Shashank:Shashi1998@cluster0.qbomb5u.mongodb.net/?retryWrites=true&w=majority')
.then(result => {
  expense.listen(3000);
  console.log('connected!')
})
.catch(err =>{
  console.log(err);
});
