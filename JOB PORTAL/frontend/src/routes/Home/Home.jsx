import { CategoryCarousal, Herosection, LatestJobs } from "@/container/import"
import useGetAllJobs from "@/hook/useGetAllJobs"

const Home = () => {
     useGetAllJobs();
     return (
          <div className="paddingcontainer">
               <Herosection />
               <CategoryCarousal />
               <LatestJobs />
          </div>
     )
}

export default Home