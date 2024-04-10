const express = require('express');
const { createProduct,showAllProducts,getAProduct } = require('../controllers/Product');
const router = express.Router();
const {upload} = require('../middleware/multer')

router.post('/create',upload.single('image'),createProduct)
router.get('/allProducts',showAllProducts)
router.post('/getAProduct/:id',getAProduct)

module.exports = router;