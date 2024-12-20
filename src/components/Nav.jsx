import { Link, NavLink } from 'react-router-dom';
import { CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import logo from '../assets/logo.png'
import useAuth from '../hooks/useAuth';
import { FaUserAltSlash } from "react-icons/fa";
import useCart from '../hooks/useCart';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";


const Nav = () => {
    const { user, logOut } = useAuth();
    const [carts] = useCart();

    const [scrollPosition, setScrollPosition] = useState(0)
    const [showNav, setShowNav] = useState(true)
    const [menu, setMenu] = useState(false)

    // const handleMenu = () =>{
    //     setMenu(!menu)
    // }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos < scrollPosition) {
                setShowNav(true)
            }
            else {
                setShowNav(false)
            }
            setScrollPosition(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPosition])


    return (
        <nav className={`fixed top-0 left-0 right-0  shadow-sm z-50 bg-gray-100/80 backdrop-blur-3xl transition-transform duration-500 ease-in-out ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='flex items-center justify-between py-4 max-w-7xl mx-auto px-3'>
                <Link to='/'>
                    <img src={logo} alt="" className='w-32' />
                </Link>
                <ul className='font-semibold text-gray-600 space-x-6 nav items-center hidden md:flex'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/allItems'>All Items</NavLink>
                    {user && <NavLink to='/dashboard/statistics'>Dashboard</NavLink>}
                    

                </ul>

                <div className='flex items-center space-x-4'>
                    {
                        user ? <div className='flex items-center space-x-6 cursor-pointer'>
                            <Link to="/dashboard/myCart" className='relative'>
                                <CiShoppingCart className='text-2xl' />
                                <span className='absolute -top-0 -right-3 bg-[#e53e21] text-white px-1 rounded-full text-xs'>{carts.length}</span>

                            </Link>
                            <img src={user?.photoURL} className='w-10 h-10 rounded-full' />
                            <span onClick={() => logOut()} className='text-sm mr-4 bg-red-600 text-white px-2 py-1 rounded-md hidden md:block'>Log Out</span>
                        </div>
                            :
                            <Link to='/login' className='bg-[#ff4120] text-white py-2 px-6 rounded-full font-semibold text-sm'>Create an Account</Link>
                    }
                    <div onClick={() => setMenu(true)} className='text-2xl md:hidden cursor-pointer'>
                        <CiMenuBurger className='' />
                    </div>
                </div>

                {/* side menu */}

                <ul className={`font-semibold text-gray-600 nav  absolute flex flex-col items-start bg-white w-[250px] h-screen top-0 right-0 py-5 pl-10 pr-2 space-y-5 md:hidden duration-500  ${menu ? 'mr-0' : '-mr-72'}`}>
                    <div className='w-full flex items-center justify-end'>
                       {user && <span onClick={() => logOut()} className='text-sm mr-4 bg-red-600 text-white px-2 py-1 rounded-md'>Log Out</span>}
                        <IoCloseOutline
                        onClick={() => setMenu(false)} className='text-3xl cursor-pointer' />
                    </div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/allItems'>All Items</NavLink>
                    <NavLink to='/dashboard/statistics'>Dashboard</NavLink>
                    {!user && <NavLink to='login'>Login</NavLink>}

                </ul>

            </div>
        </nav>
    );
};

export default Nav;