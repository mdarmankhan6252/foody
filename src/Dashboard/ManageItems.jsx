// import useAxiosPublic from "../hooks/useAxiosPublic";
import useFood from "../hooks/useFood";
import DashboardTitle from "../Shared/DashboardTitle";
import toast from 'react-hot-toast'

const ManageItems = () => {
    const [foods, ] = useFood();
    // const axiosPublic = useAxiosPublic();

    const handleDelete = () =>{
        toast.error('Sorry, You are not able to delete')        
        // axiosPublic.delete(`/food/${id}`)
        // .then(res =>{
        //     if(res.data.deletedCount > 0){
        //         toast.success('You have deleted Successfully!')
        //         refetch()
        //     }
        // })
    }
    return (
        <div>
            <DashboardTitle title="Manage All Items" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />
            <div className="">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs border *:border">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Image</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                foods.map((item, i) => <tr key={i} className="border">
                                    <td className="p-3">
                                        <p>{i + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <img src={item.image} className="w-12" />
                                    </td>
                                    <td className="p-3">
                                        <p>{item.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.price}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.category}</p>
                                    </td>
                                    
                                    <td onClick={() => handleDelete(item._id)} className="p-3">
                                        <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                            <span>Delete</span>
                                        </span>
                                    </td>
                                </tr>)
                            }
                            


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageItems;