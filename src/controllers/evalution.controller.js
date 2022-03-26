const express = require("express");

const  evalution =require("../models/evalution.model.js");

const userCrud =require("./crud.controller.js")

const router =express.Router()

router.get("",async (req,res)=>{
    try{
        const section = await evalution.find().populate({path:"user_id",select:{_id:0,firstName:1,lastName:1}})
        .populate({path:"batch_id",select:{batchName:1,_id:0}}).lean().exec();

        return res.status(200).send({view:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
})

router.post("",userCrud.postData(evalution))

router.get("/:id",async (req,res)=>{
    try{
        const section = await evalution.findById(req.params.id).populate({path:"user_id",select:{_id:0,firstName:1,lastName:1}})
        .populate({path:"batch_id",select:{batchName:1,_id:0}}).lean().exec();

        return res.status(200).send({view:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
})

router.patch("/:id",userCrud.patchData(evalution))

router.delete("/:id",userCrud.deleteData(evalution))


module.exports =router;