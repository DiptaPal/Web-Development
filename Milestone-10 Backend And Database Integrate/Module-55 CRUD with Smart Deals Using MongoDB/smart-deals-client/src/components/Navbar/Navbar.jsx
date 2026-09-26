import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import UserImage from '../UserImage/UserImage';



const Navbar = () => {

    const { user, singOutUser } = use(AuthContext);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allProducts">All Products</NavLink></li>
        {
            user && <>
                <li><NavLink to="/myProducts">My Products</NavLink></li>
                <li><NavLink to="/myBids">My Bids</NavLink></li>
                <li><NavLink to="/createProduct">Create Product</NavLink></li>
            </>
        }
    </>

    const handleLogout = () => {
        singOutUser()
            .then(() => {
                toast.info("Logged out successfully");
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-300 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to="/" className="cursor-pointer font-bold text-base md:text-xl">Smart<span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">Deals</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                {/* Avatar */}
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="avatar cursor-pointer aura text-[#632EE3] rounded-full"
                                >
                                    <UserImage
                                        photoURL={user?.photoURL}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </div>

                                {/* Dropdown */}
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content bg-base-100 rounded-box z-50 mt-1 w-30 p-1 shadow-lg text-center"
                                >
                                    <li>
                                        <button onClick={handleLogout} className="text-red-500 font-semibold flex items-center justify-center">
                                            Logout
                                        </button>
                                    </li>
                                </ul>

                            </div>
                            :
                            <div className="flex items-center gap-2 md:gap-6">
                                {/* Login Button */}
                                <Link to="/login" className="btn border-0 rounded-md px-3 md:px-5 py-2 gradient-border">
                                    <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-medium">Login</span>
                                </Link>

                                {/* Register Button */}
                                <Link to="/register" className="btn border-0 rounded-md px-3 md:px-5 py-2 font-medium text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]">
                                    Register
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;