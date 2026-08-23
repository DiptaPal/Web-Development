import { use } from 'react';
import { Link, NavLink } from 'react-router';
import fakeUser from "../../assets/user.png";
import { AuthContext } from './../../context/AuthContext';
import "./Navbar.css";

const Navbar = () => {
    const { user, singOutUser } = use(AuthContext);

    const handleLogout = () => {
        singOutUser().
            then(() => {
                alert("Sign Out Successful.");
            }).
            catch((error) => {
                alert(error.message)
            })
    }

    return (
        <nav className="flex flex-col md:flex-row justify-between items-center md:relative gap-4 md:gap-0">
            <div className="hidden sm:block"></div>
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-col md:flex-row items-center gap-4 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex items-center gap-2">
                {
                    user ?
                        <>
                            <div className="w-11 border border-primary rounded-full">
                                <img className="w-full rounded-full h-11 object-cover border border-base-300" src={user.photoURL} alt="" />
                            </div>
                            <button onClick={handleLogout} className="bg-primary py-1.5 px-10 text-xl font-semibold text-white" id="login-btn">Log Out</button>
                        </>
                        :
                        <>
                            <img src={fakeUser} alt="" />
                            <Link to="/auth/login" className="bg-primary py-1.5 px-10 text-xl font-semibold text-white" id="login-btn">Login</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Navbar;