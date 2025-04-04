const mongoose = require("mongoose")

const schema = mongoose.Schema

const centerSchema = new schema(
    {
        centername: { type: String, required: true },
        centercode: { type: String, required: true, unique: true },
        centeraddress: { type: String, required: true },
        city: { type: String, required: true },
        postalcode: { type: Number, required: true },
        contactperson: { type: String, required: true },
        contactnumber: { type: Number, required: true },
        centerfacilities: { type: [String], required: true },
        centerimages: { type: [String], required: true }
    }
)

const centerModel = mongoose.model("center", centerSchema)

module.exports = centerModel