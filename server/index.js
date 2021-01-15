const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')
const dbConnect = require('./config/db.js');
const userRoute  = require('./routes/dbapi/Users')

const app = express();
app.use(cors())
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const PORT = process.env.PORT || 4000
dbConnect();
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})
app.use('/api/users', userRoute)