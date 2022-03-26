const getData =(model)=> async (req,res)=>{
    try{
        const section = await model.find().lean().exec();

        return res.status(200).send({view:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
}

const postData = (model) =>async (req,res)=>
{
    try{
        const item = await model.create(req.body)

        return res.status(201).send({added:item})
    }
    catch (err)
    {
        return res.status(500).send({message:err.message})
    }
}


const patchData =(model)=> async (req,res)=>{
    try{
        const section = await model.findByIdAndUpdate(req.params.id,req.body).lean().exec();

        return res.status(200).send({updated:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
}


const deleteData =(model) =>async (req,res)=>{
    try{
        const item =await model.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send({deleted:item})
    }
    catch (err)
    {
        res.status(500).send({message:err.message})
    }
}


const getDataById =(model)=> async (req,res)=>{
    try{
        const section = await model.find(req.params.id).lean().exec();

        return res.status(200).send({view:section});
    }
    catch (err)
    {
       return res.status(500).send({message:err.message});
    }
}

module.exports ={getDataById,deleteData,patchData,postData,getData}