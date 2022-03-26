const app =require("./index.js")

const connect =require("./configue/database.js")

app.listen(5000,async ()=>{
    try
    {
        await connect();
        console.log("Listening to LocalHost:5000");

    }
    catch (err)
    {
        console.log({message:err.message})
    }
})