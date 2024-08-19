import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye } from "lucide-react";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminJobsTable = () => {
     const { allAdminJobs, searchJobByText } = useSelector(store => store.job);

     const [filterCompanyJobs, setFilterJobs] = useState(allAdminJobs);
     const navigate = useNavigate();

     useEffect(() => {
          const filteredJobs = allAdminJobs.filter((job) => {
               if (!searchJobByText) {
                    return true;
               };
               return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

          });
          setFilterJobs(filteredJobs);
     }, [allAdminJobs, searchJobByText])

     return (
          <Table>
               <TableCaption>A list of your recent jobs</TableCaption>
               <TableHeader>
                    <TableRow>
                         <TableHead>Company Name</TableHead>
                         <TableHead>Role</TableHead>
                         <TableHead>Date</TableHead>
                         <TableHead className="text-right">Action</TableHead>
                    </TableRow>
               </TableHeader>
               <TableBody>
                    {
                         filterCompanyJobs?.map((job) => (
                              <TableRow key={job._id}>
                                   <TableCell>{job?.company?.name}</TableCell>
                                   <TableCell>{job?.title}</TableCell>
                                   <TableCell>
                                        {new Date(job.createdAt).toLocaleDateString('en-US', {
                                             year: 'numeric',
                                             month: 'short',
                                             day: 'numeric',
                                        })}
                                   </TableCell>
                                   <TableCell className="text-right cursor-pointer">
                                        <Popover>
                                             <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                             <PopoverContent className="w-32">
                                                  <div onClick={() => navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                       <Edit2 className='w-4' />
                                                       <span>Edit</span>
                                                  </div>
                                                  <div onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                                       <Eye className='w-4' />
                                                       <span>Applicants</span>
                                                  </div>
                                             </PopoverContent>
                                        </Popover>
                                   </TableCell>
                              </TableRow>
                         ))
                    }
               </TableBody>
          </Table>
     );
};

export default AdminJobsTable;
