
const studentModel=require('../model/studentModel')

async function getData(req,res){

    const student=await studentModel.findById(req.params.id);
    if(student)
        res.status(200).json(student)
    else
        res.status(500).json({error:"Data doesn't exist"});
}
async function deleteData(req,res){

        var id=req.params.id;
        let updatedStudent=await studentModel.findByIdAndDelete(id)
        if(updatedStudent)
            res.status(200).json(updatedStudent)
        else
            res.status(500).json({error:"data doesnt't exist"});
}

async function patchData(req,res){
    var id=req.params.id;
    const {name,mail,password}=req.body;
    let student=await studentModel.findByIdAndUpdate(id,{name,mail,password})
    if(student){
            const updatedStudent=await studentModel.findById(req.params.id);
            if(updatedStudent)
                res.status(200).json(updatedStudent)
            else
                res.status(500).json({error:"Data doesn't exist"});
    }
    else
        res.status(500).json({error:"data doesnt't exist"});
}

async function insertData(req,res){

    const student=await studentModel.create({

        _id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    })
    if(student)
        res.status(200).json(student)
    else
        res.status(500).json({error:"Error inserting data"});
    
}

module.exports={
    getData,insertData,deleteData,patchData
}