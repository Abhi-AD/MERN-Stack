import { Job } from "@/container/import";
import useGetAllJobs from "@/hook/useGetAllJobs";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Browse = () => {
     useGetAllJobs();
     const { allJobs } = useSelector(store => store.job);
     const dispatch = useDispatch();
     useEffect(() => {
          return () => {
               dispatch(setSearchedQuery(""));
          }
     }, [])

     return (
          <div className='paddingcontainer paddingbuttom'>
               <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
               <div className='grid grid-cols-3 gap-4'>
                    {
                         allJobs.map((job) => {
                              return (
                                   <Job key={job._id} job={job} />
                              )
                         })
                    }
               </div>

          </div>
     )
}

export default Browse