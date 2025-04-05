const mongoose=require("mongoose")

const schema=mongoose.Schema

const stdAttSchema=new schema(
    {
        studentid:{type:String,required:true,ref:"students"},
        date:{type:String,required:true},
        time:{type:String,required:true}
    },
    {timestamps:true}
)

const stdAttMdl=mongoose.model("tutorAttendence",stdAttSchema)

module.exports=stdAttMdl