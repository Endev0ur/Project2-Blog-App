const express = require('express');
const app = express();

require('dotenv').config();
require('./Models/DbC');

const port = process.env.PORT||3000;


app.listen(port , (req , res)=>{
  console.log("Server is running on port : ", port);
})