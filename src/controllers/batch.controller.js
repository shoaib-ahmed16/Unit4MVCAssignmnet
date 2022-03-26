const express = require("express");

const batch =require("../models/batch.model.js");

const userCrud =require("./crud.controller.js")

const router =express.Router()

router.get("",userCrud.getData(batch))

router.post("",userCrud.postData(batch))

router.get("/:id",userCrud.getDataById(batch))

router.patch("/:id",userCrud.patchData(batch))

router.delete("/:id",userCrud.deleteData(batch))


module.exports =router;