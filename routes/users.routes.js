const express = require("express")
const router = express.Router()
const {createUser, loginUser} = require("../controller/users.controllers")



router.post("/register", createUser)
router.post("/login", loginUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getAUser);

module.exports = router
