require('dotenv').config(); 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./config/dbConnect')

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes');
const validateUser = require('./middleware/auth');

connect();
const port = process.env.PORT || 5001;
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

app.use('/api/user',userRoutes)
app.use('/api/product',validateUser,productRoutes)

app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`)
})


