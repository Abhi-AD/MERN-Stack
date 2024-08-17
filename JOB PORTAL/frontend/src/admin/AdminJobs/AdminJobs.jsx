import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AdminJobsTable } from "../import"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useGetAllAdminJobs from "@/hook/useGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";

const AdminJobs = () => {
     useGetAllAdminJobs()
     const navigate = useNavigate();

     const [input, setInput] = useState("");
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(setSearchJobByText(input));
     }, [input]);

     return (
          <div className="paddingcontainer paddingbuttom">
               <div className='flex items-center justify-between my-5'>
                    <Input
                         className="w-fit"
                         placeholder="Filter by name,role"
                         onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate(`/admin/jobs/create`)}>New Jobs</Button>
               </div>
               <AdminJobsTable />
          </div>
     )
}

export default AdminJobs