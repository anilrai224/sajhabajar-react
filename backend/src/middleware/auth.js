const jwt = require('jsonwebtoken')

const validateUser = async(req,res,next)=>{
    const token = req.headers["authorization"]?.split(" ")[1];
    if(!token){
        return res.send({auth:false,success:false,message:'Please login to continue'});
    }else{
        try {
            jwt.verify(token,process.env.JWT_KEY,(err,decoded)=>{
                if(err){
                    return res.send({auth:false,success:false,message:'Authentication Failed !!'})
                }else{
                    req.body.userId = decoded.indexOf;
                    next(); 
                }
            })
        } catch (error) {
            return res.send({auth:false,success:false,message:'Authenticate using valid token'})
        }
    }
}

module.exports = validateUser