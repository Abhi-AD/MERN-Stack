import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/mern-food-ordering-app-frontend/src/forms/manage-restaurant-form/ManageRestaurantForm.tsx at main · chrisblakely01/ManageRestaurantForm"


const ManageRestaurantPage = () => {
     const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
     const { restaurant } = useGetMyRestaurant();
     return (
          <ManageRestaurantForm
               restaurant={restaurant}
               onSave={createRestaurant}
               isLoading={isCreateLoading}
          />
     )
}

export default ManageRestaurantPage