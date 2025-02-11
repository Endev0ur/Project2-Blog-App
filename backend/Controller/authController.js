
const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');


const signup = async (req , res) => {
  try{
    const {name , email , password} = req.body;
    if(!name || !email || !password){
      return res.status(401).json({
        message : "All fields are madatory !",
        success : false,
      })
    }

    const user = await userModel.findOne({email});
    if(user){
      return res.status(401).json({
        message : "User Already exist !",
        success : false,
      })
    }
    else{
      const newpassword = await bcrypt.hash(password, 10);
      const newUser = new userModel({name , email , password:newpassword});
      await newUser.save();

      return res.status(201).json({
        message : "SignUp Successfully",
        success:true,
      })
    }
  }catch(err){
    return res.status(401).json({
      message : "error occurred and catch called",
      success : false,
    })
  }
}


const login = async (req, res) => {
  try{
    const {email , password} = req.body;
    if(!email || !password){
      return res.status(401).json({
        message : "All fields are required !",
        success : false,
      })
    }

    const user = await userModel.findOne({email});
    if(user){
      const userPassword = user.password;
      const same = await bcrypt.compare(password , userPassword);
      if(same){
        return res.status(201).json({
          message : "logged in successfull",
          success : true,
        })
      }else{
        return res.status(401).json({
          message : "email or password is incorrect",
          success:false,
        })
      }
    }else{
      return res.status(401).json({
        message : "email or password is incorrect",
        success:false,
      })
    }
  }catch(err){
    return res.status(404).json({
      message :"catch err ",
      success : false,
    })
  }
}


module.exports = {signup , login};