import { setAllAppliedJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
     const apiUrl = import.meta.env.VITE_API_URL;

     const dispatch = useDispatch();

     useEffect(() => {
          const fetchAppliedJobs = async () => {
               try {
                    const res = await axios.get(`${apiUrl}/application/applyall`, { withCredentials: true });
                    if (res.data.success) {
                         dispatch(setAllAppliedJobs(res.data.application));
                    }
               } catch (error) {
                    console.log(error);
               }
          }
          fetchAppliedJobs();
     }, [])
};
export default useGetAppliedJobs;