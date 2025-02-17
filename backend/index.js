const express = require('express');
require('dotenv').config();
const cors = require('cors')
require('./Models/DbC');
const authRouter = require('./Routes/authRouter');
const blogRouter = require("./Routes/blogRouter");

const app = express();
const port = process.env.PORT||3000;

app.use(express.json());

app.get('/' , (req ,res)=>{
  res.send("hello wolrd");
})

app.use(cors());
app.use("/auth" , authRouter);
app.use("/home" , blogRouter);


app.listen(port , (req , res)=>{
  console.log("Server is running on port : ", port);
})