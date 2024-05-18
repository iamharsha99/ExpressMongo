
const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    _id:Number,
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const studentModel=mongoose.model('Students',studentSchema);


module.exports=studentModel;