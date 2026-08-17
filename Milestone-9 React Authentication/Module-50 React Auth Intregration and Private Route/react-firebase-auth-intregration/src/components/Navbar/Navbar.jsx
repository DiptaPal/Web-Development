import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import "./Navbar.css";

const Navbar = () => {
    const { user, loading, signOutUser } = use(AuthContext);


    const handleSignOut = () => {
        signOutUser().
            then(() => {
                alert("Sign Out Successful.");
            }).
            catch((error) => {
                console.log(error.message);
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to="/orders">Orders</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </>
        }
    </>
    return (
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">React-Auth</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end flex justify-center items-center gap-1">
                {
                    loading ?
                        <span className="loading loading-spinner loading-lg"></span>
                        :
                        user ?
                            <>
                                <p className="text-xs font-medium">{user?.displayName}</p>
                                <button className="btn" onClick={handleSignOut}>Sign Out</button>
                            </>
                            :
                            <Link to="/login">Login</Link>

                }
            </div >
        </nav >
    );
};

export default Navbar;