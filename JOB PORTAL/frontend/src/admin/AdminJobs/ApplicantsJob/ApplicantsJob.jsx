import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";
import ApplicantsTable from "./ApplicantsTable";

const ApplicantsJob = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const params = useParams();
     const dispatch = useDispatch();
     const { applicants } = useSelector((store) => store.application);

     useEffect(() => {
          const fetchAllApplicants = async () => {
               try {
                    const response = await axios.get(`${apiUrl}/application/${params.id}/applicant`, { withCredentials: true });
                    dispatch(setAllApplicants(response.data.job));
               } catch (error) {
                    console.log(error);
               }
          };
          fetchAllApplicants();
     }, [params.id, dispatch, apiUrl]);

     return (
          <div className="paddingcontainer">
               <h1 className="font-bold text-xl my-5">
                    Applicants {applicants?.application?.length || 0}
               </h1>
               <ApplicantsTable />
          </div>
     );
};

export default ApplicantsJob;
