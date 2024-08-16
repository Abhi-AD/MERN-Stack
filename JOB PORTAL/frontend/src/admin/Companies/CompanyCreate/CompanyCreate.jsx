import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { setSingleCompany } from "@/redux/companySlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CompanyCreate = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const navigate = useNavigate();
     const [companyName, setCompanyName] = useState();
     const dispatch = useDispatch();
     const registerNewCompany = async () => {
          try {
               const createcompany = await axios.post(`${apiUrl}/company/register`, { companyName }, {
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    withCredentials: true
               });
               if (createcompany?.data?.success) {
                    dispatch(setSingleCompany(createcompany.data.company));
                    toast.success(createcompany.data.message);
                    const companyId = createcompany?.data?.company?._id;
                    navigate(`/admin/companies/${companyId}`);
               }
          } catch (error) {
               console.log(error);
          }
     }







     return (
          <div className="paddingcontainer paddingbuttom">
               <div className='my-10'>
                    <h1 className='font-bold text-2xl'>Your Company Name</h1>
                    <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
               </div>

               <Label>Company Name</Label>
               <Input
                    type="text"
                    className="my-2"
                    placeholder="Enter Your Company Name"
                    onChange={(e) => setCompanyName(e.target.value)}
               />
               <div className='flex items-center gap-2 my-10'>
                    <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
                    <Button onClick={registerNewCompany}>Continue</Button>
               </div>
          </div>
     )
}

export default CompanyCreate