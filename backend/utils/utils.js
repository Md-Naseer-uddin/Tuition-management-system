const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const bunyan=require("bunyan")
const path=require("path")
const multer=require("multer")

const resObjGen=(status,msg,data)=>{
    let obj={}
    obj.status=status
    obj.msg=msg||(status?"Successful":"Failed")
    if(data){
        obj.data=data
    }
    return obj
}

const hashPassword=(plainPass)=>{
    return bcrypt.hash(plainPass,2)
}

const comparePassword=(plainPassword,hashedPassword)=>{
    return bcrypt.compare(plainPassword,hashPassword)
}

// const generateToken=(data)=>{
//     return jwt.sign(data,)
// }

module.exports={
    resObjGen,
    hashPassword,
    comparePassword
}