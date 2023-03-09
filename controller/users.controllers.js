const User = require("../models/users.models")
const asyncHandler = require("express-async-handler")
const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email
        console.log("what am getting", email)
        const findUser = await User.findOne({email: email})
        if(!findUser) {
            // create a new user
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
        } else {
            // user already exist
            throw new Error("User Already Exist")
        }
    }
    
)
module.exports = {
    createUser
};
