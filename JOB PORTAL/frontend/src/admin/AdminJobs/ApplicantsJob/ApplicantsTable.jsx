import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const shortlistingStatus = ["Accepted", "Rejected"];
const ApplicantsTable = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const { applicants } = useSelector((store) => store.application);


     const statusHandler = async (status, id) => {
          try {
               axios.defaults.withCredentials = true;
               const statusApplication = await axios.put(`${apiUrl}/application/status/${id}/update`, { status });
               if (statusApplication.data.success) {
                    toast.success(statusApplication.data.message);
               }
          } catch (error) {
               toast.error(error.response.data.message);
          }
     }
     return (
          <Table>
               <TableCaption>A list of your recent applied user</TableCaption>
               <TableHeader>
                    <TableRow>
                         <TableHead>S.N</TableHead>
                         <TableHead>FullName</TableHead>
                         <TableHead>Email</TableHead>
                         <TableHead>Contact</TableHead>
                         <TableHead>Resume</TableHead>
                         <TableHead>Date</TableHead>
                         <TableHead className="text-right">Action</TableHead>
                    </TableRow>
               </TableHeader>

               <TableBody>
                    {applicants?.application?.map((item, index) => (

                         <tr key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{item?.applicant?.fullname}</TableCell>
                              <TableCell>{item?.applicant?.email}</TableCell>
                              <TableCell>{item?.applicant?.phone}</TableCell>
                              <TableCell >
                                   {
                                        item?.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOrignalName}</a> : <span>NA</span>
                                   }
                              </TableCell>
                              <TableCell>
                                   {new Date(item?.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                   })}
                              </TableCell>
                              <TableCell className="float-right cursor-pointer">
                                   <Popover>
                                        <PopoverTrigger>
                                             <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                             {
                                                  shortlistingStatus.map((status, index) => {
                                                       return (
                                                            <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                                                 <span>{status}</span>
                                                            </div>
                                                       )
                                                  })
                                             }
                                        </PopoverContent>
                                   </Popover>

                              </TableCell>

                         </tr>
                    )
                    )}
               </TableBody>
          </Table>
     )
}

export default ApplicantsTable