import { setAllAdminJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllAdminJobs = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const dispatch = useDispatch();
     // const { searchedQuery } = useSelector(store => store.job);
     useEffect(() => {
          const fetchAllAdminJobs = async () => {
               try {
                    const joball = await axios.get(`${apiUrl}/jobs/alladminjobs`, { withCredentials: true });
                    if (joball.data.success) {
                         dispatch(setAllAdminJobs(joball.data.jobs));
                    }
               } catch (error) {
                    console.log(error);
               }
          }
          fetchAllAdminJobs();
     }, [])
}

export default useGetAllAdminJobs