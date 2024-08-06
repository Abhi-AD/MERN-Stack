
import { Job } from "../models/job.models.js";
import { Application } from '../models/application.model.js';

export const postJob = async (request, response) => {
     try {
          const { title, description, requirements, salary, location, jobType, experience, position, companyId } = request.body;
          const userId = request.id;

          if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
               return response.status(400).json({
                    message: "Something is missing!",
                    success: false
               });
          }

          const job = await Job.create({
               title,
               description,
               requirements: requirements.split(","),
               salary: Number(salary),
               location,
               jobType,
               experienceLevel: experience,
               position,
               company: companyId,
               createdBy: userId
          });

          return response.status(201).json({
               message: "New job created successfully!",
               job,
               success: true
          });
     } catch (error) {
          console.log(error);
          return response.status(500).json({
               message: "Internal server error",
               success: false
          });
     }
};


export const getAllJobs = async (request, response) => {
     try {
          const keyword = request.query.keyword || "";
          const query = {
               $or: [
                    { title: { $regex: keyword, $options: "i" } }, // lower and uppercase filter
                    { description: { $regex: keyword, $options: "i" } },
               ]
          };
          const jobs = await Job.find(query).populate({
               path: "company"
          }).sort({ createdAt: -1 });
          if (!jobs) {
               return response.status(404).json({
                    message: "Jobs not found!",
                    success: false
               })
          };
          return response.status(200).json({
               jobs,
               success: true
          })
     } catch (error) {
          console.log(error);
     }
}


export const getJobById = async (request, response) => {
     try {
          const jobId = request.params.id;
          const job = await Job.findById(jobId)
               .populate({
                    path: "application"
               });
          if (!job) {
               return response.status(404).json({
                    message: "Jobs not found!",
                    success: false
               })
          };
          return response.status(200).json({
               job,
               success: true
          });
     } catch (error) {
          console.log(error);
     }
}


export const getAdminJobs = async (request, response) => {
     try {
          const adminId = request.id;
          const jobs = await Job.find({ createdBy: adminId })
               .populate({
                    path: 'company',
                    createdAt: -1
               });
          if (!jobs) {
               return response.status(404).json({
                    message: "Jobs not found!",
                    success: false
               })
          };
          return response.status(200).json({
               jobs,
               success: true
          })
     } catch (error) {
          console.log(error);
     }
}
