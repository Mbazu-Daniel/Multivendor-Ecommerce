const User = require("../models/users.models")

const createUser = async (req, res) => {
    const email = req.body.email
    console.log("what am getting", email)
    const findUser = await User.findOne({email: email})
    if(!findUser) {
        // create a new user
const newUser = User.create(req.body)
res.status(201).json(newUser)
    } else {
        // user already exist
        res.json({msg: "User Already Exist",success: false})
    }
}

module.exports = {
    createUser
};
