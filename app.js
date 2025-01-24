const express=require('express');
const userRouter=require('./routes/user.routes');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');
dotenv.config();
const connectToDB=require('./config/db');
connectToDB();
const app=express();
const indexRouter=require('./routes/index.routes');

//supabase---------------------------------------------------------------------------------------------------------------------------------
const { createClient } = require('@supabase/supabase-js'); 
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY); 

const storage = supabase.storage;

// Upload a file
const { data, error } = await storage.from('your-bucket-name').upload('file-name', fileData);

// Download a file
const { data: downloadedFile, error } = await storage.from('your-bucket-name').download('file-name');
//-----------------------------------------------------------------------------------------------------------------------------------------

app.set('view engine','ejs')
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter)
app.use('/',indexRouter)

app.get('/',(req,res)=>{
    res.render('index'); 
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})