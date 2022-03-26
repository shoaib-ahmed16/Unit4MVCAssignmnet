const mongoose =require("mongoose");

const userSchema =new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        gender:{type:String,default:"male"},
        dateOfBirth:{type:Number,required:true},
        type:{type:String,default:"student"},
        createdAt:{type:String,required:false},
        updatedAt:{type:String,required:true}
    }
    
)



module.exports =mongoose.model("users",userSchema)