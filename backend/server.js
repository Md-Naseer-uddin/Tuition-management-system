const express=require("express")
const mongoose=require("mongoose")
const path=require("path")
const fs=require("fs")
const routes=require("./routes/routes")
require("dotenv").config()

const app=express()

app.listen(5000,()=>console.log("Server is up and running!"))

app.use(express.json())

const uploadDir=path.join(__dirname,"uploads")

if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}


app.use("/api/v1/", routes);
console.log(process.env.DB_URL)

mongoose
.connect(process.env.DB_URL)
.then(()=>console.log("DB is connected to server!"))
.catch((err)=>console.log(err))