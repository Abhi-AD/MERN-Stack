import { FilterCard, Job } from "@/container/import";
import useGetAllJobs from "@/hook/useGetAllJobs";
import { useSelector } from "react-redux";


const Jobs = () => {
     useGetAllJobs();

     const { allJobs } = useSelector(store => store.job);
     return (
          <div className="paddingcontainer paddingbuttom">
               <div className="flex gap-5">
                    <div className="w-1/5">
                         <FilterCard />
                    </div>
                    {
                         allJobs.length <= 0 ? <span>Job not found</span> : (
                              <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                   <div className='grid grid-cols-3 gap-4'>
                                        {

                                             allJobs.map((job) => (
                                                  <div key={job?._id}>
                                                       <Job job={job} />
                                                  </div>
                                             ))
                                        }
                                   </div>
                              </div>
                         )
                    }
               </div>
          </div>
     )
};

export default Jobs;
