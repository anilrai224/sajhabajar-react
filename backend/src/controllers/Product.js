const Product = require('../models/Product')
const { uploadOnCloudinary } = require('../utils/cloudinary')

const createProduct = async (req,res)=>{
    try {
        const cloudinaryResponse = await uploadOnCloudinary(req.file.path,"sajhabajar");
        const {name,desc,price,category,quantity} = req.body;

        const product = new Product({
            name,
            desc,
            price,
            category,
            quantity,
            image:cloudinaryResponse.url
        })
        await product.save();
        res.json({success:true,message:'Proudct Created Successfully'})
    } catch (error) {
        console.log('Error Creating Proudct',error)
        res.json({success:false,message:'Internal Server Error'})
    }
}

const showAllProducts = async (req,res)=>{
    try {
        const allProducts = await Product.find();
        if(!allProducts){
            return res.json({success:false,message:'No Products Found!!'})
        }
        return res.json({success:true,products:allProducts})
    } catch (error) {
        console.log('Error Fetching Products',error)
        return res.json({success:false,message:'Error Fetching Products'})
    }
}

const getAProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        const {name,desc,price,quantity,category} = req.body;
        if(!product){
            return res.status(404).json({success:false,message:'No Product Found!!'})
        }else{
            await Product.findByIdAndUpdate(id,{name,desc,price,category,quantity},{ new:true})
            return res.status(200).json({success:true,message:'Product Updated Successfully'});
        }
    } catch (error) {
        
    }
}

module.exports={createProduct,showAllProducts,getAProduct}