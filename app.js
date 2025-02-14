const express=require('express');
const userRouter=require('./routes/user.routes');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');
dotenv.config();
const connectToDB=require('./config/db');
connectToDB();
const app=express();
const indexRouter=require('./routes/index.routes');
const cors = require('cors');
const path = require('path');

app.use(cors()); // Enable CORS for all requests
app.set('view engine','ejs')
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter)

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/homes', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})