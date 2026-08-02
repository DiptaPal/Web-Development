import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';

const links = <ul className="flex flex-col md:flex-row md:justify-between  gap-6 items-start md:items-center md:gap-3">
    <li>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ?
                    "bg-blue-600 text-white font-semibold px-3 py-2 rounded-md"
                    : "text-white bg-gray-700 px-3 py-2 rounded-md"
            }>
            Home
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/users"
            className={({ isActive }) =>
                isActive ?
                    "bg-blue-600 text-white font-semibold px-3 py-2 rounded-md"
                    : "text-white bg-gray-700 px-3 py-2 rounded-md"
            }>
            Users
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/posts"
            className={({ isActive }) =>
                isActive ?
                    "bg-blue-600 text-white font-semibold px-3 py-2 rounded-md"
                    : "text-white bg-gray-700 px-3 py-2 rounded-md"
            }>
            Posts
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/blogs" className={({ isActive }) =>
                isActive ?
                    "bg-blue-600 text-white font-semibold px-3 py-2 rounded-md"
                    : "text-white bg-gray-700 px-3 py-2 rounded-md"
            }>
            Blogs
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive ?
                    "bg-blue-600 text-white font-semibold px-3 py-2 rounded-md"
                    : "text-white bg-gray-700 px-3 py-2 rounded-md"
            }>
            About Us
        </NavLink>
    </li>
</ul>

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate("/signup")
    }

    return (
        <div className="bg-gray-200 shadow py-4 px-2 md:px-0">
            <div className="flex justify-between items-center gap-2 max-w-300 mx-auto">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="block md:hidden">
                            <button className="flex justify-center items-center" onClick={() => setMenuOpen(!menuOpen)}>
                                {
                                    menuOpen ? <X /> : <Menu />
                                }
                            </button>
                        </div>
                        <NavLink to="/" className="font-medium text-xl">P&U</NavLink>
                    </div>
                    <div className={`block md:hidden absolute w-full duration-1000 bg-gray-400 ease-in-out p-4 ${menuOpen ? "top-18 left-0" : "-top-600 left-0"}`}>
                        {
                            links
                        }
                    </div>

                </div>
                <div className="hidden md:block">
                    {
                        links
                    }
                </div>
                <div>
                    <button
                        onClick={handleSignUp}
                        className="bg-purple-500 px-3 py-2 font-medium rounded text-white cursor-pointer">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;