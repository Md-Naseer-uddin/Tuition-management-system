const adminModel = require("../models/adminMdl")
const { hashPassword, comparePassword } = require("../utils/utils")

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
        const admin = await adminModel.findOne({ emial }).lean()
        if (admin) {
            const isPswdMatched = await comparePassword(password, admin.password)
            if (isPswdMatched) {
                return res.status(200).json({
                    message: "Admin Loggedin Successfully",
                    success: true,
                    data: {
                        name: admin.name,
                        email: admin.email,
                        _id: admin._id,
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
        res.status(500).json({ message: "Internal server error", success: false })
    }
}







module.exports = {
    signup,
    login,

}