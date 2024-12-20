import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCart = () => {
   const axiosPublic = useAxiosPublic();
   const { user } = useAuth();

   const { data: carts = [], isLoading, refetch } = useQuery({
      queryKey: ['cart', user?.email],
      queryFn: async () => {
         const res = await axiosPublic.get(`/cart?email=${user?.email}`)
         return res.data;

      }
   })
   return [carts, isLoading, refetch]

};

export default useCart;