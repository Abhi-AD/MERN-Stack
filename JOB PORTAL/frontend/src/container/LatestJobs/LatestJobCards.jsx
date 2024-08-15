import { Badge } from "@/components/ui/badge";
import PropTypes from 'prop-types';
const LatestJobCards = ({ job }) => {
     return (
          <div className='p-5 rounded-md shadow-sm bg-white border border-gray-100 cursor-pointer'>
               <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>Nepal</p>
               </div>
               <div>
                    <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                    <p className='text-sm text-gray-600 line-clamp-2'>{job?.description}</p>
               </div>
               <div className='flex items-center gap-2 mt-4'>
                    <Badge className={'text-[#000000] font-bold'} variant="ghost">{job?.position}  Positions</Badge>
                    <Badge className={'text-[#00c0e4] font-bold'} variant="ghost">{job?.jobType}</Badge>
                    <Badge className={'text-[#063748] font-bold'} variant="ghost">{job?.salary}</Badge>
               </div>

          </div>
     )
}

LatestJobCards.propTypes = {
     job: PropTypes.shape({
          company: PropTypes.shape({
               name: PropTypes.string.isRequired,
          }).isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          position: PropTypes.number.isRequired,
          jobType: PropTypes.string.isRequired,
          salary: PropTypes.number.isRequired,
     }).isRequired,
};

export default LatestJobCards