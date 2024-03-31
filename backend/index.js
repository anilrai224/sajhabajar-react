require('dotenv').config(); 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./config/dbConnect')

const userRoutes = require('./routes/userRoutes')

connect();
const port = process.env.PORT || 5001;
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/api/user',userRoutes)

app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`)
})


