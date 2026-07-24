import dollarImg from "../../assets/dollar.png";
import navImg from "../../assets/logo.png";
const Navbar = ({ availableBalance }) => {
    return (
        <div className="navbar bg-base-100 flex justify-between items-center mb-5">

            {/* Logo */}
            <div className="flex justify-between items-center">
                <a className="text-xl">
                    <img className="w-15 h-15" src={navImg} alt="" />
                </a>
            </div>

            {/* Desktop Menu */}
            <div>
                <div className="hidden sm:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <li>
                            <button className="flex justify-between gap-1 btn btn-outline">
                                <span>{availableBalance}</span>
                                <span>Coin</span>
                                <img src={dollarImg} alt="" />
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="dropdown dropdown-end sm:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <li>
                            <button className="flex justify-between gap-1 btn btn-outline">
                                <span>{availableBalance}</span>
                                <span>Coin</span>
                                <img src={dollarImg} alt="" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;