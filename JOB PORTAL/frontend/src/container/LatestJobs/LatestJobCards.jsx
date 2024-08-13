import { Badge } from "@/components/ui/badge";

const LatestJobCards = () => {
     return (
          <div className='p-5 rounded-md shadow-sm bg-white border border-gray-100 cursor-pointer'>
               <div>
                    <h1 className='font-medium text-lg'>Abhishek</h1>
                    <p className='text-sm text-gray-500'>Nepal</p>
               </div>
               <div>
                    <h1 className='font-bold text-lg my-2'>Full Stack Developer</h1>
                    <p className='text-sm text-gray-600 line-clamp-2'>A Backend Developer is responsible for server-side web application logic and integration of the work front-end developers do. They typically write web services and APIs used by front-end developers and mobile application developers. They are also involved in database management, server scripting, and ensuring high performance and responsiveness to requests from the front-end.</p>
               </div>
               <div className='flex items-center gap-2 mt-4'>
                    <Badge className={'text-[#000000] font-bold'} variant="ghost">Full Positions</Badge>
                    <Badge className={'text-[#00c0e4] font-bold'} variant="ghost">Full Time</Badge>
                    <Badge className={'text-[#063748] font-bold'} variant="ghost">12LPA</Badge>
               </div>

          </div>
     )
}

export default LatestJobCards