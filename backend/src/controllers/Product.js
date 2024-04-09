const Product = require('../models/Product')
const { uploadOnCloudinary } = require('../utils/cloudinary')

const createProduct = async (req,res)=>{
    try {
        const cloudinaryResponse = await uploadOnCloudinary(req.file.path,"sajhabajar");
        const product = new Product({
            name:req.body.name,
            desc:req.body.desc,
            price:req.body.price,
            category:req.body.category,
            quantity:req.body.quantity,
            image:cloudinaryResponse.url
        })
        await product.save();
        res.json({success:true,message:'Proudct Created Successfully'})
    } catch (error) {
        console.log('Error Creating Proudct',error)
        res.json({success:false,message:'Internal Server Error'})
    }
}

module.exports={createProduct}