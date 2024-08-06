import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
          return response.status(200).cookie("token", token, { maxTime: 1 * 24 * 60 * 60 * 100, httpsOnly: true, sameSite: 'strict' }).json({
               message: "Login successful!",
               success: true,
               user
          })
     } catch (error) {
          console.log(error)
     }
}

export const logout = async (request, response) => {
     try {
          return response.status(200).cookie("token", "", { maxTime: 0 }).json({
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
          const file = req.file;
          if (!fullname || !email || !phone || !bio || !skills) {
               return response.status(400).json({
                    message: "Something is missing",
                    success: false
               });
          };

          // cloudnary

          const skillsArrays = skills.split(",");
          const userId = req.id; // middleware authentication
          let user = await User.findById(userId);

          if (!user) {
               return res.status(400).json({
                    message: "User not found.",
                    success: false
               })
          }

          // updating data
          user.fullname = fullname,
               user.email = email,
               user.phone = phone,
               user.profile.bio = bio,
               user.profile.skills = skillsArrays



          await user.save();

          user = {
               _id: user._id,
               fullname: user.fullname,
               email: user.email,
               phone: user.phone,
               role: user.role,
               profile: user.profile
          }
          return res.status(200).json({
               message: "Profile updated successfully.",
               user,
               success: true
          })
     } catch (error) {
          consolr.log(error)
     }
}