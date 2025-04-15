const adminModel = require("../models/adminMdl")
const tutorModel = require("../models/teacherMdl")
const centerModel = require("../models/centerMdl")
const { hashPassword, comparePassword, resObjGen,generateToken } = require("../utils/utils")

const signup = async (req, res) => {
    try {
        const data = req.body
        data.password = await hashPassword(data.password)
        const admin = new adminModel(data)
        await admin.save()
        res.status(201).json({ message: "Admin added successfully", success: true })
    }
    catch (err) {
        console.log(err, "error in signup")
        if (err.errorResponse.errmsg.includes("duplicate key")) {
            res.status(400).json({ message: "Email already exists", success: false })
        }
        else {
            res.status(500).json({ message: "Internal server error", success: false })
        }

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const admin = await adminModel.findOne({ email }).lean()
        if (admin) {
            const isPswdMatched = await comparePassword(password, admin.password)
            if (isPswdMatched) {
                const token = generateToken({email,name:admin.name,id:admin._id,adminRole:admin.role})
                return res.status(200).json({
                    message: "Admin Loggedin Successfully",
                    success: true,
                    data: {
                        name: admin.name,
                        email: admin.email,
                        _id: admin._id,
                        token
                    }
                })
            } else {
                return res.status(401).json({
                    message: "Incorrect Email or Password",
                    success: false
                })
            }
        }
        res.status(401).json({
            message: "Admin Does not exist",
            success: false
        })
    }
    catch (err) {
        console.error("Error in login:", err);
        res.status(500).json({ message: "Internal server error", success: false })
    }
}

const addCenter = async (req, res) => {
    try {
        const data = req.body
        data.centerimages = req.files.map(file => file.path)
        const center = new centerModel(data)
        await center.save()
        res.status(201).json(resObjGen(true, "Center added successfully", center))
    } catch (err) {
        console.error("Error saving center:", err);
        res.status(500).json(resObjGen(false))
    }
}

const addTutor = async (req, res) => {
    try {
        const data = req.body
        data.documentpath = req.file.path
        const tutor = new tutorModel(data)
        await tutor.save()
        res.status(201).json(resObjGen(true, "Tutor added Successfully", tutor))
    } catch (err) {
        console.error("Error saving tutor:", err);
        res.status(500).json(resObjGen(false))
    }
}

const dashboard = async (req, res) => {
    try {
        const centers = await centerModel.find()
        const tutors = await tutorModel.find()
        res.status(200).json({centers,tutors})
    } catch (err) {
        console.error("Error in dashboard:", err);
        res.status(500).json("Failed to load centers and tutors")
    }
}

const tutors = async (req, res) => {
    try {
        const tutors = await tutorModel.find()
        res.status(200).json(tutors)
    } catch (err) {
        console.error("Error in tutors:", err);
        res.status(500).json("Failed to load tutors")
    }
}

const centers = async (req, res) => {
    try {
        const centers = await centerModel.find()
        res.status(200).json(centers)

    } catch (err) {
        console.error("Error in centers:", err);
        res.status(500).json("Failed to load centers")
    }
}

const deleteCenter = async (req, res) => {
    try {
        const id = req.params.id
        await centerModel.deleteOne({ _id: id })
        res.status(200).json(resObjGen(true, "Center Deleted Successfully"))
    } catch (err) {
        console.error("Error in deleting center:", err);
        res.status(500).json(resObjGen(false))
    }
}

const deleteTutor = async (req, res) => {
    try {
        const id = req.params.id
        await tutorModel.deleteOne({ _id: id })
        res.status(200).json(resObjGen(true, "Center Deleted Successfully"))
    } catch (err) {
        console.error("Error in deleting tutor:", err);
        res.status(500).json(resObjGen(false))
    }
}


module.exports = {
    signup,
    login,
    addCenter,
    addTutor,
    dashboard,
    tutors,
    centers,
    deleteCenter,
    deleteTutor
}