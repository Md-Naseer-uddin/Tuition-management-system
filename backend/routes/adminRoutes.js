const express = require("express")
const adminCtrl = require("../controllers/adminCtrl")
const { upload } = require("../utils/utils")


const router = express.Router()

router.post("/signup", adminCtrl.signup)
router.post("/login", adminCtrl.login)
router.post("/addCenter", upload.array("centerimages", 5), adminCtrl.addCenter)
router.post("/addTutor", upload.single("documentpath"), adminCtrl.addTutor)
router.get("/dashboard", adminCtrl.dashboard)
router.get("/tutors", adminCtrl.tutors)
router.get("/centers", adminCtrl.centers)


module.exports = router