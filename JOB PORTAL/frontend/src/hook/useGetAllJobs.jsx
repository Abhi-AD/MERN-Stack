import { setAllJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const dispatch = useDispatch();
     // const { searchedQuery } = useSelector(store => store.job);
     useEffect(() => {
          const fetchAllJobs = async () => {
               try {
                    const joball = await axios.get(`${apiUrl}/jobs/all`, { withCredentials: true });
                    if (joball.data.success) {
                         dispatch(setAllJobs(joball.data.jobs));
                    }
               } catch (error) {
                    console.log(error);
               }
          }
          fetchAllJobs();
     }, [])
}

export default useGetAllJobs