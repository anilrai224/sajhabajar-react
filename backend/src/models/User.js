const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user',
    }
},{timestamps:true});

userSchema.pre('save',async function(req,res){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
userSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model('Users', userSchema);