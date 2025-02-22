const express = require('express');
require('dotenv').config();
const cors = require('cors')
require('./Models/DbC');
const authRouter = require('./Routes/authRouter');
const blogRouter = require("./Routes/blogRouter");
const categoryRouter = require("./Routes/categoryRouter")

const app = express();
const port = process.env.PORT||3000;

app.use(express.json());

app.get('/' , (req ,res)=>{
  res.send("hello wolrd");
})

app.use(cors({
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use("/auth" , authRouter);
app.use("/home" , blogRouter);
app.use("/home/category" , categoryRouter)


app.listen(port , (req , res)=>{
  console.log("Server is running on port : ", port);
})