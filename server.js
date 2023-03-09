const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const MONGO_URI = process.env.MONGO_URI
require("dotenv").config()
const PORT = process.env.PORT || 5000
const connectDB = require("./config/connectDB")
const authRouter = require("./routes/users.routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// ROUTERS
app.use("/api/v1/auth",authRouter )

app.use("/", (req, res) => {
    res.send("Hello From the other side")
} )
 
const start = async () => {
    try {
        await  connectDB(process.env.MONGO_URI);
        console.log("Database connected successfully")
        app.listen(PORT, () => {
            
            console.log(`Server is running on PORT ${PORT}...`)
        })   
    } catch (error) {
        console.error(error);
        
    }
}

start()