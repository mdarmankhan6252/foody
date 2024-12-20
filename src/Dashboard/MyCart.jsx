import useAxiosPublic from "../hooks/useAxiosPublic";
import useCart from "../hooks/useCart";
import DashboardTitle from "../Shared/DashboardTitle";
import toast from 'react-hot-toast'
import { PiEmptyLight } from "react-icons/pi";
import { Link } from 'react-router-dom'

const MyCart = () => {
    const [carts, isLoading, refetch] = useCart();
    const axiosPublic = useAxiosPublic();

    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleDelete = id => {
        axiosPublic.delete(`/cart/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    toast.success('Item has been deleted!')
                    refetch();
                }
            })
    }

    const totalQuantity =  carts.reduce((acc, item) => acc + item.price, 0)

    return (
        <div>
            <DashboardTitle title="My Cart" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />

            {
                carts.length > 0 ?
                    <>
                    <div>
                        <h3 className="text-lg font-semibold pb-4">Total : ${totalQuantity}</h3>
                    </div>

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
                                            carts.map((cart, i) => <tr key={i} className="border">
                                                <td className="p-3">
                                                    <p>{i + 1}</p>
                                                </td>
                                                <td className="p-3">
                                                    <img src={cart.image} className="w-10 h-10 object-cover" />
                                                </td>
                                                <td className="p-3">
                                                    <p>{cart.name}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{cart.price}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{cart.category}</p>
                                                </td>

                                                <td onClick={() => handleDelete(cart._id)} className="p-3">
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
                    </>
                    :
                    <div className="flex items-center justify-center flex-col space-y-5 sm:mt-20 p-10">
                        <h2 className="text-4xl text-gray-500">Empty Cart</h2>
                        <PiEmptyLight className="text-4xl text-gray-600" />
                        <Link className="btn" to="/">Browse Products</Link>
                    </div>
            }
        </div>
    );
};

export default MyCart;