const mongoose =require("mongoose");

const evalutionSchema =new mongoose.Schema(
    {
        user_id:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
        batch_id:{type:mongoose.Schema.Types.ObjectId,ref:"batch"},
        date_of_evaluation:{type:String,required:true}
    }
)



module.exports =mongoose.model("evalution",evalutionSchema)