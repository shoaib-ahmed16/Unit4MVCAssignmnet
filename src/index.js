const express = require("express");

const app =express();

const userController =require("./controllers/user.controller.js")
const studentController =require("./controllers/student.controller.js")
const batchController =require("./controllers/batch.controller.js")
const evalutionController =require("./controllers/evalution.controller.js")
const submittionController =require("./controllers/submittion.controller.js")

app.use(express.json())

app.use("/users",userController);

app.use("/student",studentController);

app.use("/batch",batchController);

app.use("/evalution",evalutionController);

app.use("/submittion",submittionController);


module.exports=app;