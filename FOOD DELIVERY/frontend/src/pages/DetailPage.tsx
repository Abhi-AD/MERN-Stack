import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItem from "@/components/MenuItem";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { CartItem, MenuItem as MenuItemType } from "../types";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
     const { restaurantId } = useParams();
     const { restaurant, isLoading } = useGetRestaurant(restaurantId);
     const [cartItems, setCartItems] = useState<CartItem[]>([]);


     const addToCart = (menuItem: MenuItemType) => {
          setCartItems((prevCartItems) => {
               // check if the item is already in the card
               const existingCartItem = prevCartItems.find(
                    (cartItem) => cartItem._id === menuItem._id
               );

               let updatedCartItems;
               // if item is in card, update the quantity
               if (existingCartItem) {
                    updatedCartItems = prevCartItems.map((cartItem) =>
                         cartItem._id === menuItem._id
                              ? { ...cartItem, quantity: cartItem.quantity + 1 }
                              : cartItem
                    );
               }
               else {
                    updatedCartItems = [
                         ...prevCartItems,
                         {
                              _id: menuItem._id,
                              name: menuItem.name,
                              price: menuItem.price,
                              quantity: 1,
                         },
                    ];
               }

               // if item is not in card, and it as a new item
               sessionStorage.setItem(
                    `cartItems-${restaurantId}`,
                    JSON.stringify(updatedCartItems)
               );
               return updatedCartItems;
          });
     };

     const removeFromCart = (cartItem: CartItem) => {
          setCartItems((prevCartItems) => {
               const updatedCartItems = prevCartItems.filter(
                    (item) => cartItem._id !== item._id
               );
               return updatedCartItems;
          });
     };
     if (isLoading || !restaurant) {
          return "Loading...";
     }
     return (
          <div className="flex flex-col gap-10">
               <AspectRatio ratio={16 / 5}>
                    <img
                         src={restaurant.imageUrl}
                         className="rounded-md object-cover h-full w-full"
                    />
               </AspectRatio>
               <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
                    <div className="flex flex-col gap-4">
                         <RestaurantInfo restaurant={restaurant} />
                         <span className="text-2xl font-bold tracking-tight">Menu</span>
                         {restaurant.menuItems.map((menuItem) => (
                              <MenuItem
                                   menuItem={menuItem}
                                   addToCart={() => addToCart(menuItem)}
                              />
                         ))}
                    </div>
                    <div>
                         <Card>
                              <OrderSummary
                                   restaurant={restaurant}
                                   cartItems={cartItems}
                                   removeFromCart={removeFromCart}
                              />
                         </Card>
                    </div>
               </div>
          </div>
     )
}

export default DetailPage