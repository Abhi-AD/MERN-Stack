import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {

     return (
          <Sheet>
               <SheetTrigger>
                    <Menu className="text-[#008080]" />
               </SheetTrigger>
               <SheetContent className="space-y-3">
                    <SheetTitle>
                         <span>Welcome to MunchWhiz</span>
                    </SheetTitle>
                    <Separator />
                    <SheetDescription className="flex">
                         <Button className="flex-1 font-bold bg-[#008080]">Log In</Button>
                    </SheetDescription>
               </SheetContent>
          </Sheet>
     );
};

export default MobileNav;