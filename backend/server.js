const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const URI = process.env.DATABASE_URI;


// Connect to MongoDB Database
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('Database connection was succesful');
})   

// Backend routes
const marketRouter = require('./route/markets');
const userRouter = require('./router/users');
app.use('/market', marketRouter);
app.use('/user', userRouter);


//Create Server
app.listen(PORT, ()=>{
    console.log(`Server is running in PORT: ${PORT}`)
});