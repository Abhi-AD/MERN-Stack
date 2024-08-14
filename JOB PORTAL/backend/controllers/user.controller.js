import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/getDataUri.js";

export const register = async (request, response) => {
     try {
          const { fullname, email, phone, password, role } = request.body;
          if (!fullname || !email || !phone || !role) {
               return response.status(400).json({
                    message: "Something is missing",
                    success: false
               });
          };
          const user = await User.findOne({ email });
          if (user) {
               return response.status(400).json({
                    message: "User already exist with this email",
                    success: false
               });
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          await User.create({
               fullname, email, phone, password: hashedPassword, role
          })
          return response.status(201).json({
               message: "Create Account successful!",
               success: true,
          })
     } catch (error) {
          console.log(error)
     }
}

export const login = async (request, response) => {
     try {
          const { email, password, role } = request.body;
          if (!email || !password || !role) {
               return response.status(400).json({
                    message: "Something is missing",
                    success: false
               });
          };
          let user = await User.findOne({ email });
          if (!user) {
               return response.status(400).json({
                    message: "Incorrect email or password!",
                    success: false
               })
          }
          const isPassowordMatch = await bcrypt.compare(password, user.password);
          if (!isPassowordMatch) {
               return response.status(400).json({
                    message: "Incorrect email or password!",
                    success: false
               })
          }
          if (role !== user.role) {
               return response.status(400).json({
                    message: "Account doesn't exist with current role",
                    success: false
               });
          }
          const tokenData = {
               userId: user._id
          }
          const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })
          user = {
               _id: user._id,
               fullname: user.fullname,
               email: user.email,
               phone: user.phone,
               role: user.role,
               profile: user.profile
          }
          return response.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
               message: `Login successfully ${user.fullname}!`,
               success: true,
               user
          })

     } catch (error) {
          console.log(error)
     }
}

export const logout = async (request, response) => {
     try {
          return response.status(200).cookie("token", "", { maxAge: 0 }).json({
               message: "Logout successful!",
               success: true,
          })
     } catch (error) {
          consolr.log(error)
     }
}


export const updateProfile = async (request, response) => {
     try {
          const { fullname, email, phone, bio, skills } = request.body;

          const file = request.file;
          const fileUri = getDataUri(file);
          const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

          let skillsArrays;
          if (skills) {
               skillsArrays = skills.split(",");
          }

          const userId = request.id; // middleware authentication
          let user = await User.findById(userId);

          if (!user) {
               return response.status(400).json({
                    message: "User not found.",
                    success: false
               })
          }



          // updating data
          if (fullname) user.fullname = fullname
          if (email) user.email = email
          if (phone) user.phone = phone
          if (bio) user.profile.bio = bio
          if (skills) user.profile.skills = skillsArrays

          // resume comes later here...
          if (cloudResponse) {
               user.profile.resume = cloudResponse.secure_url // save the cloudinary url
               user.profile.resumeOrignalName = file.originalname // Save the original file name
          }
          await user.save();

          user = {
               _id: user._id,
               fullname: user.fullname,
               email: user.email,
               phone: user.phone,
               role: user.role,
               profile: user.profile
          }
          return response.status(200).json({
               message: "Profile updated successfully.",
               user,
               success: true
          })
     } catch (error) {
          console.log(error)
     }
}
