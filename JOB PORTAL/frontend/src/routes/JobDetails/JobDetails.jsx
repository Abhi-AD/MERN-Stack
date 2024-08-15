import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { setSingleJob } from "@/redux/jobSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const JobDetails = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const { singleJob } = useSelector((store) => store.job);
     const { user } = useSelector((store) => store.auth);
     const isIntiallyApplied = singleJob?.application?.some((application) => application.applicant === user?._id) || false;
     const [isApplied, setIsApplied] = useState(isIntiallyApplied);

     const params = useParams();
     const jobId = params.id;
     const dispatch = useDispatch();

     const applyJobHandler = async () => {
          try {
               const applyJob = await axios.post(
                    `${apiUrl}/application/apply/${jobId}`,
                    {},
                    {
                         headers: {
                              Authorization: `Bearer ${user?.token}`, // Use the actual method to get the token
                         },
                         withCredentials: true,
                    }
               );
               if (applyJob.data.success) {
                    setIsApplied(true);
                    const updatedSingleJob = { ...singleJob, application: [...singleJob.application, { applicant: user?._id }] };
                    dispatch(setSingleJob(updatedSingleJob));
                    toast.success(applyJob.data.message);
               }
          } catch (error) {
               console.error('Error applying job:', error.response ? error.response.data : error.message);
               toast.error(error.response ? error.response.data.message : 'An error occurred');
          }
     };

     useEffect(() => {
          const fetchIdJobs = async () => {
               try {
                    const res = await axios.get(`${apiUrl}/jobs/get/${jobId}`, {
                         headers: {
                              Authorization: `Bearer ${user?.token}`,
                         },
                         withCredentials: true,
                    });
                    if (res.data.success) {
                         dispatch(setSingleJob(res.data.job));
                         setIsApplied(res.data.job.application.some(application => application.applicant === user?._id));
                    }
               } catch (error) {
                    console.error('Error fetching job details:', error.response ? error.response.data : error.message);
               }
          };
          fetchIdJobs();
     }, [jobId, dispatch, user?._id]);

     return (
          <div className="paddingcontainer">
               <div className="flex items-center justify-between">
                    <div>
                         <h1 className="font-bold text-xl">{singleJob?.title}</h1>
                         <div className="flex items-center gap-2 mt-4">
                              <Badge className="text-[#000000] font-bold" variant="ghost">{singleJob?.position} Positions</Badge>
                              <Badge className="text-[#00c0e4] font-bold" variant="ghost">{singleJob?.jobType}</Badge>
                              <Badge className="text-[#063748] font-bold" variant="ghost">{singleJob?.salary}</Badge>
                         </div>
                    </div>
                    <Button
                         onClick={isApplied ? null : applyJobHandler}
                         disabled={isApplied}
                         className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#00c0e4] hover:bg-[#063748]'}`}
                    >
                         {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
               </div>
               <h1 className="border-b-2 border-b-[#063748] font-medium py-4">Job Description</h1>
               <div className="my-4">
                    <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span></h1>
                    <h1 className="font-bold my-1">Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span></h1>
                    <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span></h1>
                    <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experience} yrs</span></h1>
                    <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary} LPA</span></h1>
                    <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.application?.length}</span></h1>
                    <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt?.split("T")[0]}</span></h1>
               </div>
          </div>
     );
};

export default JobDetails;
