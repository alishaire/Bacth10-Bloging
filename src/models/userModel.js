import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,
        unique:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    photo:{
        type:String
    }
},
{
    timestamps:true
}
)

 export default mongoose.models.users || mongoose.model("users", userSchema)