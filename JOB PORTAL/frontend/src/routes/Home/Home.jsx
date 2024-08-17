import { CategoryCarousal, Herosection, LatestJobs } from "@/container/import"
import useGetAllJobs from "@/hook/useGetAllJobs"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
     useGetAllJobs();
     const { user } = useSelector(store => store.auth);
     const navigate = useNavigate();
     useEffect(() => {
          if (user?.role === 'Supervisor') {
               navigate("/admin/companies");
          }
     }, []);
     return (
          <div className="paddingcontainer">
               <Herosection />
               <CategoryCarousal />
               <LatestJobs />
          </div>
     )
}

export default Home