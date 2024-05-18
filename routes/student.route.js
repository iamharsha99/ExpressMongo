const express=require('express')

const route=express.Router();

route.use(express.json())
route.use(express.urlencoded({extended:true}))

const {getData,insertData,deleteData,patchData}=require('../controllers/student.controllers')

route.get('/profile/:id', getData)

route.post('/signup',insertData)

route.patch('/update/:id',patchData)

route.delete('/delete/:id',deleteData)

module.exports=route;