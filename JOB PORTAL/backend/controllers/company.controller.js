import { Company } from '../models/company.model.js'
import getDataUri from "../utils/getDataUri.js";
import cloudinary from "../utils/cloudinary.js";
export const registerCompany = async (request, resonse) => {
     try {
          const { companyName } = request.body;
          if (!companyName) {
               return resonse.status(400).json({
                    message: "Company name is required.",
                    success: false
               });
          }
          let company = await Company.findOne({ name: companyName });
          if (company) {
               return resonse.status(400).json({
                    message: "You can't register same company!",
                    success: false
               })
          };
          company = await Company.create({
               name: companyName,
               userId: request.id
          });

          return resonse.status(201).json({
               message: "Company registered successfully.",
               company,
               success: true
          })
     } catch (error) {
          console.log(error);
     }
}

export const getCompany = async (request, resonse) => {
     try {
          const userId = request.id; // logged in user id
          const companies = await Company.find({ userId });
          if (!companies) {
               return resonse.status(404).json({
                    message: "Companies not found!",
                    success: false
               })
          }
          return resonse.status(200).json({
               companies,
               success: true
          })
     } catch (error) {
          console.log(error);
     }
}


// get company by id
export const getCompanyById = async (request, resonse) => {
     try {
          const companyId = request.params.id;
          const company = await Company.findById(companyId);
          if (!company) {
               return resonse.status(404).json({
                    message: "Company not found.",
                    success: false
               })
          }
          return resonse.status(200).json({
               company,
               success: true
          })
     } catch (error) {
          console.log(error);
     }
}

export const updateCompany = async (request, resonse) => {
     try {
          const { name, description, website, location } = request.body;

          const file = request.file;
          const fileUri = getDataUri(file);
          const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
          const logo = cloudResponse.secure_url;

          const updateData = { name, description, website, location, logo };

          const company = await Company.findByIdAndUpdate(request.params.id, updateData, { new: true });

          if (!company) {
               return resonse.status(404).json({
                    message: "Company not found.",
                    success: false
               });
          }

          return resonse.status(200).json({
               message: `Company information updated!`,
               success: true,
          });

     } catch (error) {
          console.error(error);
     }
};