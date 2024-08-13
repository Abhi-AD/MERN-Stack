import { CategoryCarousal, Herosection, LatestJobs } from "@/container/import"

const Home = () => {
     return (
          <div className="paddingcontainer">
               <Herosection />
               <CategoryCarousal />
               <LatestJobs />
          </div>
     )
}

export default Home