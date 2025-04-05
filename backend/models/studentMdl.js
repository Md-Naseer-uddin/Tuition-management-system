const mongoose = require("mongoose")

const schema = mongoose.Schema

const stdSchema = new schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: String, requied: true },
        email: { type: String },
        studenid: { type: String, required: true, unique: true }
    },
    {timestamps:true}
)

const studentModel=mongoose.model("student",stdSchema)

module.exports=studentModel