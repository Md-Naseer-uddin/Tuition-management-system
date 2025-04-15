const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const path = require("path")
const multer = require("multer")
const { decode } = require("punycode")
const { console } = require("inspector")

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

const generateToken = (data) => {
    return jwt.sign(data, process.env.SECRET_KEY, { expiresIn: "1d" })
}

const isLoggedIn=(req,res,next)=>{
    if(req.headers.authorization){
        const token=req.headers.authorization.split(" ")[1]
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                console.error(err)
                res.status(401).send("Invalid Token!")
            }
            else{
                console.log(decoded)
                next()
            }
        })
    }else{
        res.status(401).send("Unauthorized!")
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const name = Date.now() + "_" + file.originalname;
        req.body.filename = name
        cb(null, name)
    }
})

const upload = multer({ storage })


module.exports = {
    resObjGen,
    hashPassword,
    comparePassword,
    generateToken,
    isLoggedIn,
    storage,
    upload
}