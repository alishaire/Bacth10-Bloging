import dbConnect from "@/config/dbConnect";
import userModel from "@/models/userModel";
export default async function handler(req,res){
try {
    var id = JSON.parse(atob(req.cookies.AccessToken.split(".")[1])).id
const data = await userModel.findById(id,{password:false})
res.status(200).json({
    success:true,
    message:data
})
} catch (error) {
    
}
}