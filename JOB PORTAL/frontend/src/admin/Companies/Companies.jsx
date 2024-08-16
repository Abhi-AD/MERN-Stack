import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CompaniesTable } from "../import"
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hook/useGetAllCompanies";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";

const Companies = () => {
     useGetAllCompanies()
     const navigate = useNavigate();

     const [input, setInput] = useState("");
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(setSearchCompanyByText(input));
     }, [input]);

     return (
          <div className="paddingcontainer paddingbuttom">
               <div className='flex items-center justify-between my-5'>
                    <Input
                         className="w-fit"
                         placeholder="Filter by name"
                         onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate(`/admin/companies/create`)}>New Company</Button>
               </div>
               <CompaniesTable />
          </div>
     )
}

export default Companies