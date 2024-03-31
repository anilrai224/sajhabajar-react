const { generateToken } = require('../config/jwtToken');
const User = require('../models/User')

const createUser = async(req,res)=>{
    const {email} = req.body;
    const existUser = await User.findOne({email})
    if(!existUser){
        const newUser = await User.create(req.body);
        res.json({success:true,message:'User Created Successfully'})
    }else{
        res.json({
            success:false,
            message:'User Already Exists'
        })
    }
}

const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    const findUser = await User.findOne({email});
    if(findUser && await findUser.isPasswordMatched(password)){
        return res.json({
            success:true,
            message:'Login Successful',
            token:generateToken(findUser?._id)
        })
    }else{
        return res.json({
            success:false,
            message:'Invalid Credentials'
        })
    }
}

module.exports ={createUser,loginUser}