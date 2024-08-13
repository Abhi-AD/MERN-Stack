import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const appliedJobs = [
     {
          _id: '1',
          createdAt: '2024-08-10T10:00:00Z',
          job: {
               title: 'Software Engineer',
               company: {
                    name: 'Tech Corp',
               },
          },
          status: 'accepted',
     },
     {
          _id: '2',
          createdAt: '2024-08-11T11:00:00Z',
          job: {
               title: 'Product Manager',
               company: {
                    name: 'Innovate LLC',
               },
          },
          status: 'pending',
     },
     {
          _id: '3',
          createdAt: '2024-08-12T12:00:00Z',
          job: {
               title: 'Data Scientist',
               company: {
                    name: 'DataWorks',
               },
          },
          status: 'rejected',
     },
     {
          _id: '4',
          createdAt: '2024-08-13T13:00:00Z',
          job: {
               title: 'UX Designer',
               company: {
                    name: 'DesignPro',
               },
          },
          status: 'accepted',
     },
];

const AppliedJobTable = () => {
     return (
          <div>
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
                         {appliedJobs.map((appliedJob) => (
                              <TableRow key={appliedJob._id}>
                                   <TableCell>{appliedJob.createdAt.split("T")[0]}</TableCell>
                                   <TableCell>{appliedJob.job.title}</TableCell>
                                   <TableCell>{appliedJob.job.company.name}</TableCell>
                                   <TableCell className="text-right">
                                        <Badge
                                             className={`${appliedJob.status === "rejected"
                                                       ? 'bg-red-400'
                                                       : appliedJob.status === "pending"
                                                            ? 'bg-gray-400'
                                                            : 'bg-green-400'
                                                  }`}
                                        >
                                             {appliedJob.status.toUpperCase()}
                                        </Badge>
                                   </TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </div>
     );
};

export default AppliedJobTable;
