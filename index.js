const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/CVR')
.then(()=>console.log("Sucess"))
.catch((err)=>console.log(err));

const express=require('express');
const app=express();

const studentRoutes=require('./routes/student.route');


app.use('/api/student/',studentRoutes);

require('dotenv').config();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
