const  userModel = require('../models/users')

exports.createUser = async (req,res)=>{
    try{
    const  user = new userModel({ 
        name :  req.body.name , 
        lastName : req.body.lastName , 
        password : req.body.password , 
        age : req.body.age   , 
        email : req.body.email ,
        roles :req.body.roles
    })
   const newUser = await  user.save()
   if(newUser){
      res.json({user : newUser})
   }
}catch(error){
    console.log(error)
}
}
exports.getUser = async (req,res)=>{
    try{
    const allUsers = await userModel.find()
    if(allUsers){
        res.json(allUsers)
    }
}catch(err){
    console.log(err)
}
}
exports.getUserById = async (req,res)=>{
try{
    const id =req.params.id
    const user = await userModel.findById(id)
    if(user){
        res.json(user)
    }
}catch(error){
    console.log(error)
}
}
exports.deleteUser = async (req,res)=>{
    try{
   const id = req.params.id
   const user = await userModel.deleteOne({id}) 
   if(user){
    res.json({message:"user deleted"})
   }   
    }catch(error){
        console.log(error)
    }
}