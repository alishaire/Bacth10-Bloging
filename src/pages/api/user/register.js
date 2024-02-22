import dbConnect from "@/config/dbConnect";
import userModel from "@/models/userModel";
import bcrypt from "bcrypt"
export default async function handler (req,res){
    dbConnect()
    try {
        const hashpass = await bcrypt.hash(req.body.password, 10);
        if (req.body.userName.split(" ").length >= 2) {
          res.status(400).json({
            success: false,
            message: "Spaces are not allowed in userName",
          });
        }
        const data = await userModel.create({...req.body, password:hashpass})
        res.status(200).json({
            success:true,
            message:data
        })
      } catch (error) {
        console.log(error)
        if (error.code === 11000) {
          if (error.keyPattern?.email) {
            res.status(409).json({
              success: false,
              message: "Email Already in Use!",
            });
          }
          if (error.keyPattern?.userName) {
            res.status(409).json({
              success: false,
              message: "UserName Already in Use!",
            });
          }
          if (error.keyPattern?.phone) {
            res.status(409).json({
              success: false,
              message: "Phone No is Already in Use!",
            });
          }
          return;
        }
    
        if (error.message.split(",")[0]?.split(":")[1]?.trim()) {
          res.status(400).json({
            success: false,
            message: `${error.message.split(",")[0]?.split(":")[1]?.trim()} is required`,
          });
          return;
        }
    
        res.status(500).json({
          success: false,
          message: "Something Went Wrong!",
        });
      }
}