
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className="navbar px-2 lg:px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#23BE0A] outline-[#23BE0A] border border-[#23BE0A]" : ""}>Home</NavLink></li>
                        <li><NavLink to="/listed-books">Listed Books</NavLink></li>
                        <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="text-sm xs:text-2xl font-bold">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mx-2">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#23BE0A] outline-[#23BE0A] outline" : ""}>Home</NavLink></li>
                    <li><NavLink to="/listed-books" className={({ isActive }) => isActive ? "text-[#23BE0A] outline-[#23BE0A] outline hover:text-black mx-2" : "mx-2"}>Listed Books</NavLink></li>
                    <li><NavLink to="/pages-to-read" className={({ isActive }) => isActive ? "text-[#23BE0A] outline-[#23BE0A] outline hover:text-black" : ""}>Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-3">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;