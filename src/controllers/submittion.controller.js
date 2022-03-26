const express = require("express");

const userScehma =require("../models/submittion.model.js");

const userCrud =require("./crud.controller.js")

const router =express.Router()

router.get("",async (req,res)=>{
    try{
        const section = await userScehma.find().populate({path:"evaluation_id",select:{_id:0,date_of_evaluation:1}})
        .populate({path:"student_id",select:{_id:0,RollNumberId:1,Currentbatch:1}}).lean().exec();

        return res.status(200).send({view:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
})


router.post("",userCrud.postData(userScehma))

router.get("/:id",async (req,res)=>{
    try{
        const section = await userScehma.find(req.params.id).populate({path:"evaluation_id"})
        .populate({path:"student_id"}).lean().exec();

        return res.status(200).send({view:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
})

router.patch("/:id",userCrud.patchData(userScehma))

router.get("/:id",userCrud.deleteData(userScehma))


module.exports =router;