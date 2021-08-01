
const express = require('express');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

dotenv.config({path:'./config.env'})

const PORT = process.env.PORT

app.use(require('./Router/router'));

app.listen(PORT,(req,res)=>{
    console.log(`http//localhost:${PORT}`)

})