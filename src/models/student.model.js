const mongoose =require("mongoose");

const studentSchema =new mongoose.Schema(
    {      
        RollNumberId:{type:Number,required:true},
        Currentbatch:{type:String,required:true},
        createdAt:{type:String,required:false},
        updatedAt:{type:String,required:true},
    }
)



module.exports =mongoose.model("student",studentSchema)