import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { useDispatch } from "react-redux";
import { Loader2 } from "lucide-react";

const Register = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const { loading } = useSelector(store => store.auth)

     const [input, setInput] = useState({
          fullname: "",
          email: "",
          phone: "",
          password: "",
          role: "",
          file: "",
     });


     const changeEventHandler = (e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
     };

     const changeFileHandler = (e) => {
          setInput({ ...input, file: e.target.files?.[0] });
     };

     const submitHandler = async (e) => {
          e.preventDefault();
          const formData = new FormData();
          formData.append("fullname", input.fullname);
          formData.append("email", input.email);
          formData.append("phone", input.phone);
          formData.append("password", input.password);
          formData.append("role", input.role);
          if (input.file) {
               formData.append("file", input.file);
          }
          try {
               dispatch(setLoading(true))

               const register = await axios.post(`${apiUrl}/user/register`, formData, {
                    headers: {
                         "Content-Type": "multipart/form-data"
                    },
                    withCredentials: true,
               });
               if (register.data.success) {
                    navigate("/login")
                    toast.success(register.data.message);
               }
          } catch (error) {
               console.log(error)
               toast.error(error.response.data.message);
          } finally {
               dispatch(setLoading(false))

          }
     };

     return (
          <div className="flex items-center justify-center paddingform">
               <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                    <p className="font-bold text-2xl mb-5">Register</p>
                    <div className="my-2">
                         <Label>Full Name</Label>
                         <Input type="text" value={input.fullname} name="fullname" onChange={changeEventHandler} placeholder="Enter a full name" />
                    </div>
                    <div className="my-2">
                         <Label>Email</Label>
                         <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="Enter an email" />
                    </div>
                    <div className="my-2">
                         <Label>Phone Number</Label>
                         <Input type="text" value={input.phone} name="phone" onChange={changeEventHandler} placeholder="Enter a contact number" />
                    </div>
                    <div className="my-2">
                         <Label>Password</Label>
                         <Input type="password" value={input.password} name="password" onChange={changeEventHandler} placeholder="Enter a password" />
                    </div>
                    <div className="flex items-center justify-between">
                         <RadioGroup className="flex items-center gap-4 my-5">
                              <div className="flex items-center space-x-2">
                                   <Input type="radio" name="role" value="Employee" checked={input.role === 'Employee'} onChange={changeEventHandler} className="cursor-pointer text-[#00c0e4]" />
                                   <Label htmlFor="r1">Employee</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                   <Input type="radio" name="role" value="Supervisor" checked={input.role === 'Supervisor'} onChange={changeEventHandler} className="cursor-pointer" />
                                   <Label htmlFor="r2">Supervisor</Label>
                              </div>
                         </RadioGroup>
                         <div className="flex items-center gap-2">
                              <Label>Profile</Label>
                              <Input accept="image/*" type="file" onChange={changeFileHandler} className="cursor-pointer" />
                         </div>
                    </div>
                    {
                         loading ? <Button className="w-full my-4  bg-[#00c0e4] hover:bg-[#063748]"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button>
                              :
                              <Button type="submit" className="w-full my-4 bg-[#00c0e4] hover:bg-[#063748]">Register</Button>
                    }
                    <span className="text-sm">Already have an account? <Link to="/login" className="text-[#00c0e4]">Login</Link></span>
               </form>
          </div>
     );
};

export default Register;
