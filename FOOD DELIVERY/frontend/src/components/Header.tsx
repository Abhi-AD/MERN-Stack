import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
// import MainNav from "./MainNav";

const Header = () => {
     return (
          <div className="border-b-2 border-b-[#008080] py-6">
               <div className="container mx-auto flex justify-between items-center">
                    <Link
                         to="/"
                         className="text-3xl font-bold tracking-tight text-[#008080]"
                    >
                         MunchWhiz
                    </Link>
                    <div className="md:hidden">
                         <MobileNav />
                    </div>
               </div>
          </div>
     );
};

export default Header;