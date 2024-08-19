import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
     const navigate = useNavigate();
     const { companies, searchCompanyByText } = useSelector((store) => store.company);
     const [filterCompany, setFilterCompany] = useState(companies);


     useEffect(() => {
          const filteredCompany = companies.length >= 0 && companies.filter((company) => {
               if (!searchCompanyByText) {
                    return true
               };
               return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

          });
          setFilterCompany(filteredCompany);
     }, [companies, searchCompanyByText])
     return (
          <Table>
               <TableCaption>A list of your recent registered companies</TableCaption>
               <TableHeader>
                    <TableRow>
                         <TableHead>Logo</TableHead>
                         <TableHead>Name</TableHead>
                         <TableHead>Date</TableHead>
                         <TableHead className="text-right">Action</TableHead>
                    </TableRow>
               </TableHeader>
               <TableBody>
                    {
                         filterCompany?.map((company) => (
                              <TableRow key={company._id}>
                                   <TableCell>
                                        <Avatar>
                                             <AvatarImage src={company.logo} alt={company.name} />
                                        </Avatar>
                                   </TableCell>
                                   <TableCell>{company.name}</TableCell>
                                   <TableCell>
                                        {new Date(company.createdAt).toLocaleDateString('en-US', {
                                             year: 'numeric',
                                             month: 'short',
                                             day: 'numeric',
                                        })}
                                   </TableCell>
                                   <TableCell className="text-right cursor-pointer">
                                        <Popover>
                                             <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                             <PopoverContent className="w-32">
                                                  <div onClick={() => navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                       <Edit2 className='w-4' />
                                                       <span>Edit</span>
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

export default CompaniesTable;