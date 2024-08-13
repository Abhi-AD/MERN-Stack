import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup } from "../ui/radio-group"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "sonner"

const Login = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const navigate = useNavigate();
     console.log(apiUrl)
     const [input, setInput] = useState({
          email: "",
          password: "",
          role: "",
     });

     const changeEventHandler = (e) => {
          setInput({ ...input, [e.target.name]: e.target.value });
     };

     const submitHandler = async (e) => {
          e.preventDefault();
          try {
               const login = await axios.post(`${apiUrl}/user/login`, input, {
                    headers: {
                         "Content-Type": "application/json"
                    },
                    withCredentials: true,
               });
               if (login.data.success) {
                    navigate("/")
                    toast.success(login.data.message);
               }
          } catch (error) {
               console.log(error);
               toast.error(error.response.data.message);
          }
     };
     return (
          <div className="flex items-center justify-center paddingform">
               <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                    <p className="font-bold text-2xl mb-5">Login</p>
                    <div className="my-2">
                         <Label>Email</Label>
                         <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="Enter a email" />
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
                    </div>
                    <Button type="submit" className="w-full my-4  bg-[#00c0e4] hover:bg-[#063748]">Login</Button>
                    <span className="text-sm">Do&apos;nt have an account? <Link to="/login" className="text-[#00c0e4]">login</Link></span>
               </form>
          </div>
     )
}

export default Login