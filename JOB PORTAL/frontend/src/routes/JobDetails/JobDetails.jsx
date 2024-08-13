import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";

const singleJob = {
     title: 'Software Engineer',
     location: 'New York, NY',
     description: 'Develop and maintain software applications.',
     experience: 3,
     salary: 12,
     applications: [/* Array of applicants */],
     createdAt: '2024-08-13T10:00:00Z',
};
const JobDetails = () => {
     const isApplied = true;
     return (
          <div className="paddingcontainer">
               <div className='flex items-center justify-between'>
                    <div>
                         <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                         <div className='flex items-center gap-2 mt-4'>
                              <Badge className={'text-[#000000] font-bold'} variant="ghost">Full Positions</Badge>
                              <Badge className={'text-[#00c0e4] font-bold'} variant="ghost">Full Time</Badge>
                              <Badge className={'text-[#063748] font-bold'} variant="ghost">12LPA</Badge>
                         </div>
                    </div>
                    <Button
                         // onClick={isApplied ? null : applyJobHandler}
                         disabled={isApplied}
                         className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#00c0e4] hover:bg-[#063748]'}`}>
                         {isApplied ? 'Already Applied' : 'Apply Now'}
                    </Button>
               </div>
               <h1 className='border-b-2 border-b-[#063748] font-medium py-4'>Job Description</h1>
               <div className='my-4'>
                    <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                    <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                    <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                    <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
                    <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}LPA</span></h1>
                    <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
                    <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>
               </div>
          </div>
     )
}

export default JobDetails