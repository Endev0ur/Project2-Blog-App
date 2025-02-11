const express = require('express');
require('dotenv').config();
require('./Models/DbC');
const authRouter = require('./Routes/authRouter');

const app = express();
const port = process.env.PORT||3000;

app.use(express.json());x

app.get('/' , (req ,res)=>{
  res.send("hello wolrd");
})

app.use("/auth" , authRouter);


app.listen(port , (req , res)=>{
  console.log("Server is running on port : ", port);
})