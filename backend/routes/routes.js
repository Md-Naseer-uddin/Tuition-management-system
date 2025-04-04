const express=require("express")
const adminRoutes=require("./adminRoutes")
// const tutorRoutes=require("./tutorRoutes")

const router=express.Router()

router.use("/admin",adminRoutes)
// router.get("/tutor",tutorRoutes)

module.exports=router