
const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar max-w-300 mx-auto flex justify-between items-center">

                {/* nav right */}
                <div>
                    <a className="text-base md:text-xl font-bold">CS — Ticket System</a>
                </div>

                {/* nav left */}
                <div>
                    <div className="hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                            <li><button className="py-2 px-4 rounded bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] font-semibold text-white"><span>+</span> New Ticket</button></li>
                        </ul>
                    </div>

                    {/* responsive */}
                    <div className="dropdown dropdown-end md:hidden">
                        <div tabIndex={-1} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                            <li><button className="py-2 px-4 rounded bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] font-semibold text-white"><span>+</span> New Ticket</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;