import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AppliedJobTable, UpdateProfileDialog } from "@/container/import";
import { Pen } from "lucide-react";
import { Contact } from "lucide-react";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const isResume = true;

const Profile = () => {
     const [open, setOpen] = useState(false);
     const { user } = useSelector(store => store.auth);
     return (
          <div className="paddingbuttom">
               <div className='paddingcontainer bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                    <div className='flex justify-between'>
                         <div className='flex items-center gap-4'>
                              <Avatar className="h-24 w-24">
                                   <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile" />
                              </Avatar>
                              <div>
                                   <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                                   <p>{user?.profile?.bio}</p>
                              </div>
                         </div>
                         <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                    </div>
                    <div className='my-5'>
                         <div className='flex items-center gap-3 my-2'>
                              <Mail />
                              <span>{user?.email}</span>
                         </div>
                         <div className='flex items-center gap-3 my-2'>
                              <Contact />
                              <span>{user?.phone}</span>
                         </div>
                    </div>
                    <div className='my-5'>
                         <h1>Skills</h1>
                         <div className='flex items-center gap-1'>
                              {
                                   user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                              }
                         </div>
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                         <Label className="text-md font-bold">Resume</Label>
                         {
                              isResume ? <a target='blank' href={user?.profile?.resume} className='text-[#00c0e4] w-full hover:underline cursor-pointer'>{user?.profile?.resumeOrignalName}</a> : <span>NA</span>
                         }
                    </div>
               </div>
               <div className='paddingcontainer bg-white rounded-2xl'>
                    <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                    <AppliedJobTable />
               </div>
               <UpdateProfileDialog open={open} setOpen={setOpen} />
          </div>
     )
}

export default Profile