const express = require("express")
const router = express.Router()
const {createUser} = require("../controller/users.controllers")



router.post("/register", createUser)


module.exports = router
