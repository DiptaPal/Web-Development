'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

    const links = <>
        <li>
            <Link className={pathname === "/about" ? "text-blue-400" : ""} href="/about">
                About
            </Link>
        </li>

        <li>
            <Link className={pathname === "/contact" ? "text-blue-400" : ""} href="/contact">
                Contact
            </Link>
        </li>

        <li>
            <Link
                className={pathname === "/about/developers" ? "text-blue-400" : ""}
                href="/about/developers"
            >
                Developer
            </Link>
        </li>

        <li>
            <Link className={pathname === "/blogs" ? "text-blue-400" : ""} href="/blogs">
                Blogs
            </Link>
        </li>

        <li>
            <Link
                className={pathname === "/dashboard" ? "text-blue-400" : ""}
                href="/dashboard"
            >
                Dashboard
            </Link>
        </li>

        <li>
            <Link className={pathname === "/users" ? "text-blue-400" : ""} href="/users">
                Users
            </Link>
        </li>

    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">NextJS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;