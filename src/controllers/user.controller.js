const express = require("express");

const user =require("../models/user.model.js");

const userCrud =require("./crud.controller.js")

const router =express.Router()

router.get("",userCrud.getData(user))

router.post("",userCrud.postData(user))

router.get("/:id",userCrud.getDataById(user))

router.patch("/:id",userCrud.patchData(user))

router.delete("/:id",userCrud.deleteData(user))


module.exports =router;

