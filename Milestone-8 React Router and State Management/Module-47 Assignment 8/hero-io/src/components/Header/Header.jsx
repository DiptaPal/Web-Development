import { IoLogoGithub } from "react-icons/io";
import { Link, NavLink } from 'react-router';
import footerLogo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="border-b border-[#E9E9E9] shadow-sm">
            <div className="navbar max-w-300 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/apps" className={({ isActive }) => isActive ? "bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent  border-b rounded-none border-[#632EE3]" : ""}>Apps</NavLink></li>
                            <li><NavLink to="/installation" className={({ isActive }) => isActive ? "bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent  border-b rounded-none border-[#632EE3]" : ""}>Installation</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-2">
                        <img className="w-10 h-10" src={footerLogo} alt="" />
                        <h3 className="font-bold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">HERO.IO</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/apps" className={({ isActive }) => isActive ? "bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent  border-b rounded-none border-[#632EE3]" : ""}>Apps</NavLink></li>
                        <li><NavLink to="/installation" className={({ isActive }) => isActive ? "bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent  border-b rounded-none border-[#632EE3]" : ""}>Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="https://github.com/DiptaPal" className="btn bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white"><IoLogoGithub />Contribute</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;