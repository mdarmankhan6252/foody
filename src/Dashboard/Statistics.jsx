import { FaUsers } from "react-icons/fa";
import DashboardTitle from "../Shared/DashboardTitle";
import { GiProfit } from "react-icons/gi";

const Statistics = () => {
    return (
        <div>
            <DashboardTitle title="Statistics" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />
            <div className="grid grid-cols-4 gap-6">

                <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <GiProfit className="text-5xl"/>
                    <div>
                        <h3 className="text-4xl font-semibold">1000</h3>
                        <p>Revenue</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <FaUsers className="text-5xl"/>
                    <div>
                        <h3 className="text-4xl font-semibold">82</h3>
                        <p>Customers</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-cyan-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <GiProfit className="text-5xl"/>
                    <div>
                        <h3 className="text-4xl font-semibold">132</h3>
                        <p>Products</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 bg-gradient-to-r from-amber-600 to-pink-100 text-white p-8 rounded-lg justify-center">
                    <GiProfit className="text-5xl"/>
                    <div>
                        <h3 className="text-4xl font-semibold">223</h3>
                        <p>Orders</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Statistics;