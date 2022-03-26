const express = require("express");

const student=require("../models/student.model.js");

const userCrud =require("./crud.controller.js")

const router =express.Router()

router.get("",userCrud.getData(student))

router.post("",userCrud.postData(student))

router.get("/:id",userCrud.getDataById(student))

router.patch("/:id",userCrud.patchData(student))

router.delete("/:id",userCrud.deleteData(student))


module.exports =router;