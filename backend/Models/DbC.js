const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB)
.then(()=>{
  console.log("DataBase Connected");
}).catch((err)=>{
  console.log("Error occurred : ",err);
})