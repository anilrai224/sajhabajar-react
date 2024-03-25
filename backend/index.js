const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5001;
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.listen(port,()=>{
    console.log(`Server Running on PORT ${port}`)
})


