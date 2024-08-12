import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup } from "../ui/radio-group"

const Login = () => {
     return (
          <div className="flex items-center justify-center paddingform">
               <form action="" className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
                    <p className="font-bold text-2xl mb-5">Login</p>
                    <div className="my-2">
                         <Label>Email</Label>
                         <Input type="email" placeholder="Enter a email" />
                    </div>
                    <div className="my-2">
                         <Label>Password</Label>
                         <Input type="password" placeholder="Enter a password" />
                    </div>
                    <div className="flex items-center justify-between">
                         <RadioGroup className="flex items-center gap-4 my-5">
                              <div className="flex items-center space-x-2">
                                   <Input type="radio" name="role" value="employee" className="cursor-pointer text-[#00c0e4]" />
                                   <Label htmlFor="r1">Employee</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                   <Input type="radio" name="role" value="supervisor" className="cursor-pointer" />
                                   <Label htmlFor="r2">Supervisor</Label>
                              </div>
                         </RadioGroup>
                    </div>
                    <Button type="submit" className="w-full my-4  bg-[#00c0e4] hover:bg-[#063748]">Login</Button>
                    <span className="text-sm">Do&apos;nt have an account? <Link to="/register" className="text-[#00c0e4]">Register</Link></span>
               </form>
          </div>
     )
}

export default Login