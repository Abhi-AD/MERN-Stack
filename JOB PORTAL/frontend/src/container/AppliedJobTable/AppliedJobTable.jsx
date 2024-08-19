import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
     const { allAppliedJobs } = useSelector(store => store.job);

     // Function to format date
     const formatDate = (dateString) => {
          return new Date(dateString).toLocaleDateString('en-US', {
               year: 'numeric',
               month: 'short',
               day: 'numeric',
          });
     };

     return (
          <div className="paddingbuttom">
               <Table>
                    <TableCaption>A list of your applied jobs</TableCaption>
                    <TableHeader>
                         <TableRow>
                              <TableHead>Date</TableHead>
                              <TableHead>Job Role</TableHead>
                              <TableHead>Company</TableHead>
                              <TableHead className="text-right">Status</TableHead>
                         </TableRow>
                    </TableHeader>
                    <TableBody>
                         {Array.isArray(allAppliedJobs) && allAppliedJobs.length > 0 ? (
                              allAppliedJobs.map((appliedJob) => (
                                   <TableRow key={appliedJob._id}>
                                        <TableCell>{formatDate(appliedJob.createdAt)}</TableCell>
                                        <TableCell>{appliedJob.job?.title || 'N/A'}</TableCell>
                                        <TableCell>{appliedJob.job?.company?.name || 'N/A'}</TableCell>
                                        <TableCell className="text-right">
                                             <Badge className={`${appliedJob?.status === 'rejected' ? 'bg-red-400' :
                                                       appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'
                                                  }`}>
                                                  {appliedJob.status.toUpperCase()}
                                             </Badge>
                                        </TableCell>
                                   </TableRow>
                              ))
                         ) : (
                              <TableRow>
                                   <TableCell colSpan={4} className="text-center">
                                        You haven&apos;t applied for any jobs yet.
                                   </TableCell>
                              </TableRow>
                         )}
                    </TableBody>
               </Table>
          </div>
     );
};

export default AppliedJobTable;
