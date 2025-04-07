const express=require("express")
const tutorCtrl=require("../controllers/tutorCtrl")

const router=express.Router()

router.post("/login",tutorCtrl.login)
router.post("/addStudent",tutorCtrl.addStudent)
router.post("/markStdAtten",tutorCtrl.markStdAtten)
router.post("/markAtten",tutorCtrl.markAtten)
router.get("/students",tutorCtrl.students)
router.get("/studentsAttendance",tutorCtrl.studentsAttendance)
router.delete("/deleteStudent/:id",tutorCtrl.deleteStudent)


module.exports=router