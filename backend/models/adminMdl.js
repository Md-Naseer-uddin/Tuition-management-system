const mongoose = require("mongoose")

const schema = mongoose.Schema

const adminSchema = new schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, default: "admin" }
    },
    { timestamps: true }
)

const adminModel = mongoose.model("admin", adminSchema)

module.exports = adminModel
