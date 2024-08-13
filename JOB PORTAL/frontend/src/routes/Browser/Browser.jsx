import { Job } from "@/container/import";

const randomJobs = [1, 2, 3];

const Browse = () => {

     return (
          <div className='paddingcontainer paddingbuttom'>
               <h1 className='font-bold text-xl my-10'>Search Results ({randomJobs.length})</h1>
               <div className='grid grid-cols-3 gap-4'>
                    {
                         randomJobs.map((job) => {
                              return (
                                   <Job key={job} />
                              )
                         })
                    }
               </div>

          </div>
     )
}

export default Browse