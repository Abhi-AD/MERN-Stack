// import { useSelector } from 'react-redux';
import LatestJobCards from './LatestJobCards';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {

     return (
          <div className='paddingbuttom'>
               <h1 className='text-4xl font-bold'>
                    <span className='text-[#00c0e4]'>Hot & Trending </span> Job Opportunities
               </h1>
               <p className='my-2 text-lg text-gray-600'>
                    Explore the hottest job opportunities currently available. Find roles that suit your expertise and elevate your career with the best employers.
               </p>
               <div className='grid grid-cols-3 gap-4 my-5'>
                    {
                         randomJobs.length <= 0
                              ? <span>No positions available right now</span>
                              : randomJobs.slice(0, 6).map((job) => <LatestJobCards key={job._id} job={job} />)
                    }
               </div>
          </div>

     )
}

export default LatestJobs