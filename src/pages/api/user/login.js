import dbConnect from "@/config/dbConnect";
import { GenAccessToken } from "@/helper/jwt";
import userModel from "@/models/userModel";
import { serialize } from "cookie";
import bcrypt from "bcrypt"

export default async function handler(req,res){
    dbConnect()
    try {
        const { email, userName, password } = req.body;
        if (!email && !userName) {
          res.status(400).json({
            success: false,
            message: "Enter UserName or email",
          });
        }
        if (!password) {
          res.status(400).json({
            success: false,
            message: "Enter Password",
          });
        }
        const founduser =
          (await userModel.findOne({ userName: userName })) ||
          (await userModel.findOne({ email: email }));
        if (!founduser) {
          res.status(404).json({
            success: false,
            message: "Invalid Credentials",
          });
        } else {
          const validate = await bcrypt.compare(password, founduser.password);
          if (!validate) {
            res.status(404).json({
              success: false,
              message: "Invalid Credentials",
            });
          } else {


            const Accesstoken = await GenAccessToken({
                id: founduser._id,
              });
              res.setHeader(
                "Set-Cookie",
                serialize("AccessToken", Accesstoken, {
                  path: "/",
                  httpOnly: true,
                  secure: true,
                })
              );

            res.status(200).json({
              success: true,
              message: "Login Successfully",
            });
          }
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Something went wrong!",
        });
      }
}