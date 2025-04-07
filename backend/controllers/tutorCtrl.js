const tutorModel = require("../models/teacherMdl")
const studentModel = require("../models/studentMdl")
const studentAttendanceMdl=require("../models/stdAttenMdl")
const attModel=require("../models/tutorAttenMdl")
const moment=require("moment")
const { comparePassword, resObjGen } = require("../utils/utils")


const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const tutor = await tutorModel.findOne({ email }).lean()
        if (tutor) {
            const isPswdMatched = await comparePassword(password, tutor.password)
            if (isPswdMatched) {
                return res.status(200).json(resObjGen(true, "Tutor logged in Successfully", tutor))
            }
            else {
                return res.status(401).json({
                    message: "Incorrect Email or Password",
                    success: false
                })
            }
        }
        res.status(401).json({
            message: "Tutor Does not exist",
            success: false
        })
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error", success: false })
    }
}


const addStudent = async (req, res) => {
    try {
        const data = req.body
        const student = new studentModel(data)
        await student.save()
        res.status(201).json(resObjGen(true, "Student added successfully", student))
    } catch (err) {
        res.status(500).json(resObjGen(false))
    }

}

const students = async (req, res) => {
    try {
        const students = await studentModel.find()
        res.status(200).json(students)
    } catch (err) {
        res.status(500).json("Failed to load students")
    }
}

const studentsAttendance = async (req, res) => {
    try {
        const studentsAtt = await studentAttendanceMdl.find()
        res.status(200).json(studentsAtt)
    } catch (err) {
        res.status(500).json("Failed to load student's Attendence")
    }
}

const markStdAtten=async(req,res)=>{
    try{
        const studentid=req.body.studentid
        const today=moment().format("YYYY-MM-DD")
        const currentTime=moment().format("HH:MM")

        let attendance=await studentAttendanceMdl.findOne({studentid,date:today})
        if(attendance){
            res.status(200).json(resObjGen(true,"Attendance already Marked"))
        }
        else{
            const newAttendance= new studentAttendanceMdl({studentid,date:today,time:currentTime})
            await newAttendance.save()
            res.status(200).json(resObjGen(true,"Attendance marked successfully"))
        }        
    }catch(err){
        console.log(err)
        res.status(404).json(resObjGen(false))
    }
}

const markAtten=async(req,res)=>{
    try {
        const email = req.body.email
        const today = moment().format("YYYY-MM-DD")
        const currentTime = moment().format("HH:MM")

        let attendance = await attModel.findOne({email,date:today})
        if(attendance){
            let resp = resObjGen(true,"Attendance already Marked")
            res.status(200).json(resp)
        }else{
            const newAttendance = new attModel({email,date:today,time:currentTime})
            await newAttendance.save()
            let resp = resObjGen(true,"Attendance marked successfully")
            res.status(201).json(resp)
        }
    } catch (err) {
        console.log(err);
        let resp = responseGenerator(false);
        res.status(404).json(resp)
    }
}

const deleteStudent=async (req,res)=>{
    try{
        const id=req.params.id
        await studentModel.deleteOne({_id:id})
        res.status(200).json(resObjGen(true,"Student Deleted successfully"))
    }catch(err){
        res.status(500).json(resObjGen(false))
    }
}


module.exports = {
    login,
    addStudent,
    students,
    markAtten,
    markStdAtten,
    studentsAttendance,
    deleteStudent
}