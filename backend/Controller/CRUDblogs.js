
const blogsModel = require('../Models/BlogsModel');
const userModel = require('../Models/userModel')

const createBlog = async (req , res) => {
  console.log("hellow orld");
  try{
    const {/*image ,*/ topic , category , content} = req.body;
    // const userId = req.user._id;
    const username = req.user.name;

    if(/*!image || */!topic || category==="Choose a category" || !category || !content){
      return res.status(401).json({
        message : "All Fields are Mandatory !",
        success : false,
      })
    }else{
      const createNewBlog = await blogsModel({
        /*image , */topic , category , content , /*userId ,*/ username
      });
      await createNewBlog.save();
      return res.status(201).json({
        message : "Blog Created Successfully",
        success : true,
      })
    }
    
  }catch(err){
    return res.status(401).json({
      message : "Error occur in Catch",
      error:err,
      success : false,
    })
  }
}


const getAllBlog = async (req , res) => {
  try{
    const Blogs = await blogsModel.find();
    res.status(201).json({
      Blogs,
    })
  }catch(err){
    res.status(404).json({
      message : "error in catch",
    })
  }
}


const deleteBlog = async (req , res) => {
  try{const {id} = req.params;
  const deleteblog = await blogsModel.findByIdAndDelete(id);
  if(!deleteblog){
    return res.status(401).json({
      message : "Some error occurred try again !",
      success : false,
    })
  }else{
    return res.status(200).json({
      message : "blog deleted successfully",
      success : true,
    })
  }}
  catch(err){
    res.status(401).json({
      message : "error occurred in catch",
      success:false,
    })
  }
}

const updateBlog = async (req , res) => {
  try{
    const {id} = req.params;
    const updateblog = await blogsModel.findByIdAndUpdate(id , req.body, { new: true });

    if(!updateblog){
      res.status(401).json({
        message : "blog not found",
        success :false,
      })
    }
    return res.status(200).json({
      message : "Blog Update successfully",
      success : true,
    })
  }catch(err){
    res.status(500).json({
      message :  "error occur in catch",
      success : false,
    })
  }

}



module.exports = {createBlog , getAllBlog , deleteBlog , updateBlog};