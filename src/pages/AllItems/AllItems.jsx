import { useState } from "react";
import Card from "../../components/Card";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const AllItems = () => {
   
   const [search, setSearch] = useState('')
   

   const axiosPublic = useAxiosPublic();
    const { data : foods = [], refetch } = useQuery({
        queryKey: ['foods',search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/foods?search=${search}`)
            return res.data;
        }
    })
    

   const handleSearch = e => {
      e.preventDefault();
      const text = e.target.search.value;
      setSearch(text)
      refetch()
   }

   console.log(search);
   return (
      <div className="py-12">

         <form onSubmit={handleSearch} className="max-w-2xl mx-auto border flex rounded-full group focus-within:border-red-500">
            <input type="text" name="search" placeholder="Search Item Names" className="w-full outline-none rounded-l-full p-2" />
            <input type="submit" value="Search" className="p-3 px-6 text-sm font-semibold bg-[#fb320f] text-white rounded-r-full cursor-pointer" />
         </form>


         {/* all items */}
         <h3 className="text-xl font-semibold py-6">Total Items : {foods.length}</h3>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
            {
               foods.map(food => <Card key={food._id} food={food}></Card>)
            }
         </div>

      </div>
   );
};

export default AllItems;