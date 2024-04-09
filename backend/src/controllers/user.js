const { generateToken } = require('../config/jwtToken');
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const createUser = async(req,res)=>{
    const {email} = req.body;
    const existUser = await User.findOne({email})
    if(!existUser){
        await User.create(req.body);
        return res.json({success:true,message:'User Created Successfully'})
    }else{
        return res.json({
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

const getUser = async(req,res)=>{
    const token = req.headers["authorization"]?.split(" ")[1];
    if(!token){
        return res.json({success:false,message:'Please Login To Continue'})
    }else{
        try {
            jwt.verify(token,process.env.JWT_KEY,async(err,decoded)=>{
                if(err){
                    return res.json({success:false,message:'Authentication Failed'})
                }else{
                    const id = decoded.id;
                    const user = await User.findById(id);
                    return res.json({user})
                }
            })
        } catch (error) {
            return res.json({success:false,message:'Authenticate using valid token'})
        }
    }
}

module.exports ={createUser,loginUser,getUser}