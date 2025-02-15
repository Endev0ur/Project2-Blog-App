const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  image : {
    //multer used or firebase for image upload
    type:String,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  content:{
    type:String,
    required:true,
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user",
    required: true 
  },
  username: { 
    type: String, 
    required: true 
  },
  likesCount:{
    type:Number,
    default:0,
  },
  dislikeCount:{
    type:Number,
    deafult:0,
  },

} , {timestamps:true})

module.exports = mongoose.model("blog" , blogSchema);