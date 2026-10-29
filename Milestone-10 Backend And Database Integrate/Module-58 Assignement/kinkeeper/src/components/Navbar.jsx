'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { LuClock3 } from "react-icons/lu";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
    const pathname = usePathname();

    const links = (
        <>
            <li>
                <Link
                    href="/"
                    className={`text-base flex items-center justify-center gap-1 ${pathname === "/"
                        ? "font-semibold bg-[#244D3F] text-white"
                        : "font-medium text-[#64748B]"
                        }`}
                >
                    <RiHome2Line size={24} />
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link
                    href="/timeline"
                    className={`text-base flex items-center justify-center gap-1 ${pathname === "/timeline"
                        ? "font-semibold bg-[#244D3F] text-white"
                        : "font-medium text-[#64748B]"
                        }`}
                >
                    <LuClock3 size={24} />
                    <span>Timeline</span>
                </Link>
            </li>
            <li>
                <Link
                    href="/stats"
                    className={`text-base flex items-center justify-center gap-1 ${pathname === "/stats"
                        ? "font-semibold bg-[#244D3F] text-white"
                        : "font-medium text-[#64748B]"
                        }`}
                >
                    <GoGraph size={24} />
                    <span>Stats</span>
                </Link>
            </li>
        </>
    );

    return (
        <div className="bg-white shadow-sm sticky top-0 z-50">
            <div className="navbar max-w-300 mx-auto px-4">

                <div className="flex-1">
                    <Link href="/" className="text-2xl font-semibold text-[#244D3F]">
                        <span className="font-extrabold text-[#1F2937]">Kin</span>Keeper
                    </Link>
                </div>

                {/* Desktop */}
                <div className="flex-none hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        {links}
                    </ul>
                </div>

                {/* Mobile */}
                <div className="flex-none md:hidden">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost text-[#244D3F] p-2">
                            <AiOutlineMenu size={28} />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-lg bg-white rounded-box w-52 border border-gray-100 space-y-1"
                        >
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;