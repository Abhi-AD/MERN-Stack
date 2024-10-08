import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSearchedQuery } from "@/redux/jobSlice";

const fitlerData = [
     {
          fitlerType: "Location",
          array: ["Nepal", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
     },
     {
          fitlerType: "Industry",
          array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
     },
     {
          fitlerType: "Salary",
          array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
     },
]

const FilterCard = () => {
     const [selectedValue, setSelectedValue] = useState('');
     const dispatch = useDispatch();
     const changeHandler = (value) => {
          setSelectedValue(value);
     }
     useEffect(() => {
          dispatch(setSearchedQuery(selectedValue));
     }, [selectedValue]);
     return (
          <div className='w-full  bg-white p-3 rounded-md'>
               <h1 className='font-bold text-lg'>Filter Jobs</h1>
               <hr className='mt-3' />
               <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                    {fitlerData.map((data, index) => (
                         <div key={index}>
                              <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                              {data.array.map((item, index) => {
                                   const itemId = `id${index}-${item}`
                                   return (
                                        <div key={index} className='flex items-center space-x-2 my-2'>
                                             <RadioGroupItem value={item} id={itemId} />
                                             <Label htmlFor={itemId} >{item}</Label>
                                        </div>
                                   )
                              })}
                         </div>
                    ))}
               </RadioGroup>
          </div>
     )
}

export default FilterCard;
