import { Restaurant } from "@/types";
import { Dot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
     restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
     return (
          <Card className="border-sla">
               <CardHeader>
                    <CardTitle className="text-3xl font-bold tracking-tight capitalize">
                         {restaurant.restaurantName}
                    </CardTitle>
                    <CardDescription className="capitalize">
                         {restaurant.city}, {restaurant.country}
                    </CardDescription>
               </CardHeader>
               <CardContent className="flex">
                    {restaurant.cuisines.map((item, index) => (
                         <span className="flex">
                              {index < restaurant.cuisines.length && <Dot />}
                              <span>{item}</span>
                         </span>
                    ))}
               </CardContent>
          </Card>
     );
};

export default RestaurantInfo;