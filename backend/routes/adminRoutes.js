const express = require("express")
const adminCtrl = require("../controllers/adminCtrl")
const { isLoggedIn, upload } = require("../utils/utils")


const router = express.Router()

router.post("/signup", adminCtrl.signup)
router.post("/login", isLoggedIn, adminCtrl.login)
router.post("/addCenter", isLoggedIn, upload.array("centerimages", 5), adminCtrl.addCenter)
router.post("/addTutor", isLoggedIn, upload.single("documentpath"), adminCtrl.addTutor)
router.get("/dashboard", isLoggedIn, adminCtrl.dashboard)
router.get("/tutors", isLoggedIn, adminCtrl.tutors)
router.get("/centers", isLoggedIn, adminCtrl.centers)
router.delete("/deleteCenter/:id", isLoggedIn, adminCtrl.deleteCenter)
router.delete("/deleteTutor/:id", isLoggedIn, adminCtrl.deleteTutor)



module.exports = router