const User = require("../models/users.models")
const asyncHandler = require("express-async-handler")
const { generateToken } = require("../config/jwtToken")

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

// Login User
const loginUser = asyncHandler(
    async (req, res) => {
        const {email, password} =req.body;
        // check if user exist
        const user = await User.findOne({email: email})
        if(user && ( await user.comparePassword(password))) {
                res.status(201).json({
                    _id: user?.id, 
                    firstName: user?.firstName,
                    lastName: user?.lastName,
                    email: user?.email,
                    mobile : user?.mobile ,
                    token: generateToken(user?._id)
                    
                })
        } else {
            throw new Error("Invalid Credentials")
        }
    }
)

// Get All Users

const getAllUsers = asyncHandler(
    async(req, res) => {
   try {
        const getUser = await User.find()
        res.json(getUser)
   } catch(error) {
    throw new Error(error)
   }
})

//   get Single user
const getAUser = asyncHandler( 
    async(req, res) => {
        const {id} = req.params
        try {
            const user = await User.findById(id)
            res.json({
                user
            })
        } catch(error) {
            throw new Error(error)
        }
    }
)
module.exports = {
    createUser
};
