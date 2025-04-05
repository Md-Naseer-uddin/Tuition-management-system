const mongoose=require("mongoose")

const schema=mongoose.Schema

const attSchema=new schema(
    {
        email:{type:String,required:true,ref:"tutors"},
        date:{type:String,required:true},
        time:{type:String,required:true}
    },
    {timestamps:true}
)

// const attMdl=mongoose.model("tutorAttendence",attSchema)
// module.exports=attMdl
module.exports = mongoose.models["tutorAttendence"] || mongoose.model("tutorAttendence", attSchema);
