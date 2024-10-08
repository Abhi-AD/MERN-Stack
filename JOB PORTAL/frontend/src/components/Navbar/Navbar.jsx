import { User2 } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { LogOut } from "lucide-react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser } from "@/redux/authSlice"
import { toast } from "sonner"

const defaultProfileImage = "https://github.com/shadcn.png";

const Navbar = () => {
     const { user } = useSelector(store => store.auth);
     const apiUrl = import.meta.env.VITE_API_URL;
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const logoutHandler = async () => {
          try {
               const userlogout = await axios.get(`${apiUrl}/user/logout`, { withCredentials: true });
               if (userlogout.data.success) {
                    dispatch(setUser(null));
                    navigate("/");
                    toast.success(userlogout.data.message);
               }
          } catch (error) {
               console.log(error);
               toast.error(error.response.data.message);
          }
     }
     return (
          <div className="bg-white ">
               <div className="flex items-center justify-between paddingcontainer h-16">
                    {
                         user && user.role === 'Supervisor' ? (
                              <>
                                   <Link to={`/admin/companies`} className="flex items-center">
                                        {/* <img src="" alt="Logo" className="h-10 w-auto" /> */}
                                        <h1 className="text-3xl font-extrabold">Career <span className="text-[#00c0e4]">Connect</span></h1>
                                   </Link>
                              </>
                         ) : (
                              <>
                                   <Link to={`/`} className="flex items-center">
                                        {/* <img src="" alt="Logo" className="h-10 w-auto" /> */}
                                        <h1 className="text-3xl font-extrabold">Career <span className="text-[#00c0e4]">Connect</span></h1>
                                   </Link>
                              </>
                         )
                    }

                    <div className="flex items-center gap-12">
                         <ul className="flex font-medium items-center gap-5">
                              {
                                   user && user.role === 'Supervisor' ? (
                                        <>
                                             <li><Link to="/admin/companies">Companies</Link></li>
                                             <li><Link to="/admin/jobs">Jobs</Link></li>
                                        </>
                                   ) : (
                                        <>
                                             <li><Link to="/">Home</Link></li>
                                             <li><Link to="/jobs">Jobs</Link></li>
                                             <li><Link to="/browse">Browse</Link></li>
                                        </>
                                   )
                              }
                         </ul>
                         {!user ? (
                              <div className="flex items-center gap-2">
                                   <Link to={`/login`}>
                                        <Button variant="outline">Login</Button>
                                   </Link>
                                   <Link to={`/register`}>
                                        <Button className="bg-[#00c0e4] hover:bg-[#063748]">Register</Button>
                                   </Link>
                              </div>
                         ) : (

                              <Popover>
                                   <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer">
                                             <AvatarImage src={user?.profile?.profilePhoto || defaultProfileImage} alt="@shadcn" />
                                        </Avatar>
                                   </PopoverTrigger>
                                   <PopoverContent className="w-80">
                                        <div className="">
                                             <div className="flex gap-4 space-y-2">
                                                  <Avatar className="cursor-pointer">
                                                       <AvatarImage src={user?.profile?.profilePhoto || defaultProfileImage} alt="@shadcn" />
                                                  </Avatar>
                                                  <div>
                                                       <h4 className="font-normal">{user?.fullname}</h4>
                                                       <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                                                  </div>
                                             </div>
                                             <div className="flex flex-col my-2 text-[#525050]">
                                                  {
                                                       user && user.role === 'Employee' && (
                                                            <div className="flex w-fit items-center gap-2 coursor-pointer">
                                                                 <User2 />
                                                                 <Button variant="link"><Link to={`/profile`}>View Profile</Link></Button>
                                                            </div>
                                                       )
                                                  }

                                                  <div className="flex w-fit items-center gap-2 coursor-pointer">
                                                       <LogOut />
                                                       <Button onClick={logoutHandler} variant="link">Logout</Button>
                                                  </div>
                                             </div>
                                        </div>
                                   </PopoverContent>
                              </Popover>
                         )
                         }
                    </div>
               </div>

          </div>
     )
}

export default Navbar