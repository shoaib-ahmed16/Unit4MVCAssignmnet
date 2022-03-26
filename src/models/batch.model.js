const mongoose =require("mongoose");

const batchSchema =new mongoose.Schema(
    {      
        batchName:{type:String,required:true},
        createdAt:{type:String,required:false},
        updatedAt:{type:String,required:true},
    }
)



module.exports =mongoose.model("batch",batchSchema)