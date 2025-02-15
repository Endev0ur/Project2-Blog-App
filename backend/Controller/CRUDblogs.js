
const blogsModel = require('../Models/BlogsModel');
const userModel = require('../Models/userModel')

const createBlog = async (req , res) => {
  try{
    const {image , name , category , content} = req.body;
    const userId = req.user._id;
    const username = req.user.name;

    if(!image || !name || !category || !content){
      return res.status(401).json({
        message : "All Fields are Mandatory !",
        success : false,
      })
    }
    const createNewBlog = await blogsModel({
      image , name , category , content , userId , username
    });
    await createNewBlog.save();
    return res.status(201).json({
      message : "Blog Created Successfully",
      success : true,
    })
  }catch(err){
    return res.status(401).json({
      message : "Error occur in Catch",
      error:err,
      success : false,
    })
  }
}




module.exports = {createBlog};