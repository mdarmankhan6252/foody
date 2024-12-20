import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useFood = () => {
    const axiosPublic = useAxiosPublic();
    const { data : foods = [], isLoading, refetch } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await axiosPublic.get('/foods')
            return res.data;
        }
    })
    return [foods, isLoading, refetch]
};

export default useFood;