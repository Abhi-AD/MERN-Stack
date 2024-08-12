import { Application } from "../models/application.model.js";
import { Job } from "../models/job.models.js";

export const applyJobs = async (request, resonse) => {
     try {
          const userId = request.id;
          const jobId = request.params.id
          // findout the jobs
          if (!jobId) {
               return resonse.status(400).json({
                    message: "Jobs select is required.",
                    success: false
               });
          }
          // check user
          let exisitingApplication = await Application.findOne({ job: jobId, applicant: userId });
          if (exisitingApplication) {
               return resonse.status(400).json({
                    message: "You have already apply for this jobs!",
                    success: false
               })
          };
          // check job
          const job = await Job.findById(jobId)
          if (!job)
               return resonse.status(404).json({
                    message: "Job not found.",
                    success: false
               })
          // create application
          const newapplication = await Application.create({
               job: jobId,
               applicant: userId,
          });
          job.application.push(newapplication._id)
          await job.save()

          return resonse.status(201).json({
               message: "Job application send successfully!",
               success: true
          })
     } catch (error) {
          console.log(error);
     }
}

export const getApplyJobs = async (request, resonse) => {
     try {
          const userId = request.id; // logged in user id
          const application = await Application.find({ applicant: userId })
               .sort({ createdAt: -1 })
               .populate({
                    path: 'job',
                    options: { sort: { createdAt: -1 } },
                    populate: {
                         path: 'company',
                         options: { sort: { createdAt: -1 } },
                    }
               });
          if (!application) {
               return resonse.status(404).json({
                    message: "No Application!",
                    success: false
               })
          }
          return resonse.status(200).json({
               application,
               success: true
          })
     } catch (error) {
          console.log(error);
     }
}


// get job by apply 
export const getApplicantsById = async (request, resonse) => {
     try {
          const jobId = request.params.id;
          const job = await Job.findById(jobId)
               .populate({
                    path: 'application',
                    options: { sort: { createdAt: -1 } },
                    populate: {
                         path: 'applicant',
                         options: { sort: { createdAt: -1 } },
                    }
               });
          if (!job) {
               return resonse.status(404).json({
                    message: "Job not found.",
                    success: false
               })
          }
          return resonse.status(200).json({
               job,
               success: true
          })
     } catch (error) {
          console.log(error);
     }
}

export const updateApplicantionStatus = async (request, resonse) => {
     try {
          const { status } = request.body;
          const applicationId = request.params.id;
          if (!status) {
               return resonse.status(404).json({
                    message: "Status is required!",
                    success: false
               });
          }
          // fint the applicant by applicant id
          const application = await Application.findOne({ _id: applicationId });
          if (!application) {
               return resonse.status(404).json({
                    message: "Application not found!",
                    success: false
               });
          }
          // update status
          application.status = status.toLowerCase();
          await application.save();

          return resonse.status(200).json({
               message: `Application status updated successfully!`,
               success: true,
          });

     } catch (error) {
          console.error(error);
     }
};