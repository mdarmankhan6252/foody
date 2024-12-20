import { FaCaravan, FaUsers } from "react-icons/fa";
import DashboardTitle from "../Shared/DashboardTitle";
import { GiProfit } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import useFood from "../hooks/useFood";
import useUsers from "../hooks/useUsers";


const Statistics = () => {
    const [foods] = useFood()    
    const [users] = useUsers();

    return (
        <div>
            <DashboardTitle title="Statistics" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />
            <div className="grid grid-cols-4 gap-6">

                <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <GiProfit className="text-5xl" />
                    <div>
                        <h3 className="text-4xl font-semibold">1000</h3>
                        <p>Revenue</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <FaUsers className="text-5xl" />
                    <div>
                        <h3 className="text-4xl font-semibold">{users.length}</h3>
                        <p>Customers</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <MdOutlineProductionQuantityLimits className="text-5xl" />
                    <div>
                        <h3 className="text-4xl font-semibold">{foods.length}</h3>
                        <p>Products</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <FaCaravan className="text-5xl" />
                    <div>
                        <h3 className="text-4xl font-semibold">255</h3>
                        <p>Orders</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Statistics;