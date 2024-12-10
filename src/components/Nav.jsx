import { Link, NavLink } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import logo from '../assets/logo.png'
import useAuth from '../hooks/useAuth';
import { FaUserAltSlash } from "react-icons/fa";

const Nav = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className='fixed top-0 left-0 right-0 border bg-white shadow-sm z-50'>
            <div className='flex items-center justify-between py-4 max-w-7xl mx-auto px-3'>
                <Link to='/'>
                    <img src={logo} alt="" className='w-16' />
                </Link>
                <ul className='font-semibold text-gray-600 space-x-6 nav flex items-center'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/foods'>Foods</NavLink>
                    <NavLink to='/dashboard/statistics'>Dashboard</NavLink>
                    {!user && <NavLink to='login'>Login</NavLink>}
                    <Link to="/dashboard/myCart" className='relative'>
                        <CiShoppingCart className='text-2xl' />
                        <span className='absolute -top-0 -right-3 bg-[#e53e21] text-white px-1 rounded-full text-xs'>2</span>

                    </Link>
                </ul>

                <div>
                    {
                        user ? <div className='flex items-center space-x-2'><img src={user?.photoURL} className='w-10 h-10 rounded-full' /> <span onClick={() => logOut()} className='text-white bg-red-600 text-sm font-semibold px-2 py-1 rounded-md'>Logout</span></div> : <FaUserAltSlash className='text-2xl' />
                    }
                </div>

            </div>
        </nav>
    );
};

export default Nav;