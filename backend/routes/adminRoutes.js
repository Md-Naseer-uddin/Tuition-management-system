const express=require("express")
const adminCtrl=require("../controllers/adminCtrl")


const router=express.Router()

router.get("/signup",adminCtrl.signup)
router.get("/login",adminCtrl.login)


module.exports=router
