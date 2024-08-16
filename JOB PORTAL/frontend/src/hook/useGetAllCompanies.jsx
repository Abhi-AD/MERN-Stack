import { setCompanies } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetAllCompanies = () => {
     const apiUrl = import.meta.env.VITE_API_URL;
     const dispatch = useDispatch();
     useEffect(() => {
          const fetchCompanies = async () => {
               try {
                    const allcompany = await axios.get(`${apiUrl}/company/get`, { withCredentials: true });
                    console.log('called');
                    if (allcompany.data.success) {
                         dispatch(setCompanies(allcompany.data.companies));
                    }
               } catch (error) {
                    console.log(error);
               }
          }
          fetchCompanies();
     }, [])
}

export default useGetAllCompanies