const CategoryModel = require('../Models/CategoryModel');

const getAllCategory = async (req , res) => {
  try{
    const categories = await CategoryModel.find();
    res.status(200).json({
      categories,
    })
  }catch(err){
    res.status(404).json({
      err,
      success:false,
    })
  }
}

const createCategory = async (req , res) => {
  try{
    const {name} = req.body;
    console.log(name);
  
    const present = await CategoryModel.findOne({name});
    if(present){
      res.status(300).json({
        message :"already present !",
        success : false,
      })
    }
    else{
      const newCategory = new CategoryModel({name});
      newCategory.save();
      res.status(200).json({
        message :"category created successfully ! ",
        success : true,
      })
    }
  }
  catch(err){
    res.status(404).json({
      message : "error occur in catch",
      success : false,
    })
  }
}

const deleteCategory = async (req , res) => {
  try
  {
    const {name} = req.body;
    await CategoryModel.findOneAndDelete({name});
    res.status(200).json({
      message :"Category Deleted !",
      success : true,
    })
  }
  catch(err){
    res.status(404).json({
      message : "error in catch",
      success : false,
    })
  }
}

module.exports = {getAllCategory , createCategory , deleteCategory}