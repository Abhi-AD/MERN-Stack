import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AppliedJobTable } from "@/container/import";
import { Pen } from "lucide-react";
import { Contact } from "lucide-react";
import { Mail } from "lucide-react";

const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;

const Profile = () => {

     return (
          <div>
               <div className='paddingcontainer bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                    <div className='flex justify-between'>
                         <div className='flex items-center gap-4'>
                              <Avatar className="h-24 w-24">
                                   <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                              </Avatar>
                              <div>
                                   <h1 className='font-medium text-xl'>Name</h1>
                                   <p>Bio</p>
                              </div>
                         </div>
                         <Button className="text-right" variant="outline"><Pen /></Button>
                    </div>
                    <div className='my-5'>
                         <div className='flex items-center gap-3 my-2'>
                              <Mail />
                              <span>email</span>
                         </div>
                         <div className='flex items-center gap-3 my-2'>
                              <Contact />
                              <span>98000000</span>
                         </div>
                    </div>
                    <div className='my-5'>
                         <h1>Skills</h1>
                         <div className='flex items-center gap-1'>
                              {
                                   skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                              }
                         </div>
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                         <Label className="text-md font-bold">Resume</Label>
                         {
                              isResume ? <a target='blank' href="" className='text-[#00c0e4] w-full hover:underline cursor-pointer'>resumeOriginalName</a> : <span>NA</span>
                         }
                    </div>
               </div>
               <div className='paddingcontainer bg-white rounded-2xl'>
                    <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                    <AppliedJobTable />
               </div>
               {/* <UpdateProfileDialog open={open} setOpen={setOpen} /> */}
          </div>
     )
}

export default Profile