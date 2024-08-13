import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Job = () => {
     const navigate = useNavigate();
     const jobId = "vuifurhvbdfwy3y8ruo"
     return (
          <div className="p-5 rounded-md shadow-sm bg-white border border-[#00c0e4]">
               <div className="flex items-center justify-between">
                    <p className='text-sm text-gray-500'>2 day ago</p>
                    <Button variant='outline' className="rounded-full" size="icon"><Bookmark /></Button>
               </div>

               <div className='flex items-center gap-2 my-2'>
                    <Button className="p-6" variant="outline" size="icon">
                         <Avatar>
                              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZR3MWDG6JjCRIAl46CNpzt5JGfB7ZY2fRNw&s" />
                         </Avatar>
                    </Button>
                    <div>
                         <h1 className='font-medium text-lg'>Company Name</h1>
                         <p className='text-sm text-gray-500'>Nepal</p>
                    </div>
               </div>

               <div>
                    <h1 className='font-bold text-lg my-2'>Job Title</h1>
                    <p className='text-sm text-gray-600 line-clamp-4'>Job description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, veniam nulla explicabo dolore sed possimus, fuga numquam rerum ratione dolores dicta esse illo praesentium impedit modi sapiente rem eaque molestias.</p>
               </div>

               <div className='flex items-center gap-2 mt-4'>
                    <Badge className={'text-[#000000] font-bold'} variant="ghost">Full Positions</Badge>
                    <Badge className={'text-[#00c0e4] font-bold'} variant="ghost">Full Time</Badge>
                    <Badge className={'text-[#063748] font-bold'} variant="ghost">12LPA</Badge>
               </div>

               <div className='flex items-center gap-4 mt-4'>
                    <Button onClick={() => navigate(`/jobs/${jobId}`)} variant="outline">Details</Button>
                    <Button className="bg-[#063748]">Save For Later</Button>
               </div>
          </div>
     )
}

export default Job