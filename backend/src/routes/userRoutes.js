const express = require('express');
const { createUser, loginUser, getUser } = require('../controllers/user');
const router = express.Router();

router.post('/create',createUser)
router.post('/login',loginUser)
router.get('/getuser',getUser)

module.exports=router;