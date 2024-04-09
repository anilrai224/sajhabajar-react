const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        require:true,
    },
    image:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('products',productSchema);