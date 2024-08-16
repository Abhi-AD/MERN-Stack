import { setSingleCompany } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetCompanyById = (companyId) => {
     const apiUrl = import.meta.env.VITE_API_URL;

     const dispatch = useDispatch();
     useEffect(() => {
          const fetchSingleCompany = async () => {
               try {
                    const companyid = await axios.get(`${apiUrl}/company/get/${companyId}`, { withCredentials: true });
                    if (companyid.data.success) {
                         dispatch(setSingleCompany(companyid.data.company));
                    }
               } catch (error) {
                    console.log(error);
               }
          }
          fetchSingleCompany();
     }, [companyId, dispatch])
}

export default useGetCompanyById