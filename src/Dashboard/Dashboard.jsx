import { Link, NavLink, Outlet } from 'react-router-dom'
import { SiAlwaysdata } from "react-icons/si";
import { VscDiffAdded } from "react-icons/vsc";
import { BiFoodMenu } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { CiBookmarkPlus } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="flex gap-10">
            <div className="w-[400px] bg-[#d4d044] h-screen p-6">
                <Link to='/' className="text-[#f75538] text-2xl text-center font-serif font-semibold sm:text-4xl block">Foody</Link>

                <ul className='*:font-serif text-lg *:p-2 *: *:w-full mt-10 space-y-4 *:border *:border-[#b5a108] dashboard'>
                    <NavLink to='statistics' className='flex items-center space-x-3'>
                        <SiAlwaysdata className='text-xl' />
                        <span>Statistics</span>

                    </NavLink>
                    <NavLink to='addItem' className='flex items-center space-x-3'>
                        <VscDiffAdded className='text-xl' />
                        <span>Add Item</span>

                    </NavLink>
                    <NavLink to='manageItems' className='flex items-center space-x-3'>
                        <BiFoodMenu className='text-xl' />
                        <span>Manage Items</span>

                    </NavLink>
                    <NavLink to='allUsers' className='flex items-center space-x-3'>
                        <BiFoodMenu className='text-xl' />
                        <span>All Users</span>
                    </NavLink>
                    {/* users  */}
                    <NavLink to='myCart' className='flex items-center space-x-3'>
                        <BiFoodMenu className='text-xl' />
                        <span>My Cart</span>
                    </NavLink>
                    <NavLink to='paymentHistory' className='flex items-center space-x-3'>
                        <MdPayments className='text-xl' />
                        <span>Payment History</span>
                    </NavLink>
                    <NavLink to='manageBookings' className='flex items-center space-x-3'>
                        <CiBookmarkPlus className='text-xl' />
                        <span>Manage Bookings</span>
                    </NavLink>
                    <NavLink to='/' className='flex items-center space-x-3'>
                        <FaHome className='text-xl' />
                        <span>Home</span>
                    </NavLink>


                </ul>
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;