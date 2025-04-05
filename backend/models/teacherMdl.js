const mongoose = require("mongoose")

const schema = mongoose.Schema

const tutorSchema = new schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, requied: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: Number, require: true },
        specialization: { type: String, required: true },
        experience: { type: Number, required: true },
        documentPath: { type: String, required: true }
    },
    { timestamps: true }
)

const tutorModel = mongoose.model("tutor", tutorSchema)

module.exports = tutorModel