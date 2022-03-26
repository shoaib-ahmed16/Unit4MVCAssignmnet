const mongoose =require("mongoose");

const userSchema =new mongoose.Schema(
    {
        evaluation_id:{type:mongoose.Schema.Types.ObjectId,ref:"evalution"},
        student_id:{type:mongoose.Schema.Types.ObjectId,ref:"student"},
        marks:{type:Number,required:true},
        createdAt:{type:String,required:false},
        updatedAt:{type:String,required:true},
    }
)



module.exports =mongoose.model("submittion",userSchema)