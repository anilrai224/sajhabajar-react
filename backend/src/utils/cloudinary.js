const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRETE 
});

const uploadOnCloudinary = async(localFilePath,folder="sajhabajar")=>{
    try {
        if(!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath,{
            folder:folder,
            resource_type:"auto"
        })
        //file has been uploaded successfully
        // console.log('Image uploaded on Cloudinary',response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary files as uploaded got failed
        return null;
    }
}

module.exports = {uploadOnCloudinary}