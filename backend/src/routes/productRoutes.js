const express = require('express');
const { createProduct } = require('../controllers/Product');
const router = express.Router();
const {upload} = require('../middleware/multer')

router.post('/create',upload.single('image'),createProduct)

module.exports = router;