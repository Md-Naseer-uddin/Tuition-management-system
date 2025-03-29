const express=require("express")
const adminCtrl=require("../controllers/adminCtrl")


const router=express.Router()

router.get("/",adminCtrl)