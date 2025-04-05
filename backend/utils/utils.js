const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const path = require("path")
const multer = require("multer")

const resObjGen = (status, msg, data) => {
    let obj = {}
    obj.status = status
    obj.msg = msg || (status ? "Successful" : "Failed")
    if (data) {
        obj.data = data
    }
    return obj
}

const hashPassword = (plainPass) => {
    return bcrypt.hash(plainPass, 2)
}

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compare(plainPassword, hashedPassword)
}

// const generateToken=(data)=>{
//     return jwt.sign(data,)
// }

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        const name=Date.now()+"_"+file.originalname;
        req.body.filename=name
        cb(null,name)
    }
})

const upload=multer({storage})


    module.exports = {
    resObjGen,
    hashPassword,
    comparePassword,
    storage,
    upload
}