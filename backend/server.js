const express=require("express")
const mongoose=require("mongoose")
const path=require("path")
const fs=require("fs")
const routes=require("./routes/routes")

const app=express()

app.listen(5000,()=>console.log("Server is up and running!"))

app.use(express.json())

const uploadDir=path.join(__dirname,"uploads")

if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}


app.use("/api/v1/", routes);


mongoose.connect("mongodb://127.0.0.1:27017/cgc")
.then(()=>console.log("DB is connected to server!"))
.catch((err)=>console.log(err))


