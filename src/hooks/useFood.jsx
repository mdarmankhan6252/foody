import { useQuery } from "@tanstack/react-query";



const useFood = () => {
    const {data} = useQuery({
        queryKey : ['foods'],
        queryFn :  async () =>{
            
        }
    })
};

export default useFood;