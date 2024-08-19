import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useGetCompanyById from "@/hook/useGetCompanyById";
import axios from "axios";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CompanySetup = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const params = useParams();
     useGetCompanyById(params.id);

     const navigate = useNavigate();
     const [loading, setLoading] = useState(false);
     const { singleCompany } = useSelector(store => store.company);
     const [input, setInput] = useState({
          name: "",
          description: "",
          website: "",
          location: "",
          file: null,
     });

     const changeEventHandler = (e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
     }

     const changeFileHandler = (e) => {
          const file = e.target.files?.[0];
          setInput({ ...input, file });
     }

     const submitHandler = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("name", input.name);
          formData.append("description", input.description);
          formData.append("website", input.website);
          formData.append("location", input.location);
          if (input.file) {
               formData.append("file", input.file);
          }
          try {
               setLoading(true);
               const res = await axios.put(`${apiUrl}/company/update/${params.id}`, formData, {
                    headers: {
                         'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
               });
               if (res.data.success) {
                    toast.success(res.data.message);
                    navigate("/admin/companies");
               }
          } catch (error) {
               console.log(error);
               toast.error(error.response.data.message);
          } finally {
               setLoading(false);
          }
     }

     useEffect(() => {
          setInput({
               name: singleCompany.name || "",
               description: singleCompany.description || "",
               website: singleCompany.website || "",
               location: singleCompany.location || "",
               file: null,
          });
     }, [singleCompany]);



     return (
          <div className="paddingcontainer paddingbuttom">
               <form onSubmit={submitHandler}>
                    <div className='flex items-center gap-5 p-8'>
                         <Button onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                              <ArrowLeft />
                              <span>Back</span>
                         </Button>
                         <h1 className='font-bold text-xl'>Company Setup</h1>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                         <div>
                              <Label>Company Name</Label>
                              <Input
                                   type="text"
                                   name="name"
                                   value={input.name}
                                   onChange={changeEventHandler}
                              />
                         </div>
                         <div>
                              <Label>Description</Label>
                              <Input
                                   type="text"
                                   name="description"
                                   value={input.description}
                                   onChange={changeEventHandler}
                              />
                         </div>
                         <div>
                              <Label>Website</Label>
                              <Input
                                   type="text"
                                   name="website"
                                   value={input.website}
                                   onChange={changeEventHandler}
                              />
                         </div>
                         <div>
                              <Label>Location</Label>
                              <Input
                                   type="text"
                                   name="location"
                                   value={input.location}
                                   onChange={changeEventHandler}
                              />
                         </div>
                         <div>
                              <Label>Logo</Label>
                              <Input
                                   type="file"
                                   accept="image/*"
                                   onChange={changeFileHandler}
                              />
                         </div>
                    </div>
                    {
                         loading ? (
                              <Button className="w-full my-4">
                                   <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                              </Button>
                         ) : (
                              <Button type="submit" className="w-full my-4">Update</Button>
                         )
                    }
               </form>
          </div>
     )
}

export default CompanySetup;