import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from "./Link";

const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];

const links = navigationData.map(route =>
    <Link key={route.id} route={route}></Link>
)

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-gray-200">
            <nav className="flex justify-between max-w-300 mx-2 md:mx-auto py-3">
                <div className="flex">
                    <button onClick={() => setOpen(!open)} className="block md:hidden">
                        {
                            open ? <X /> : <Menu />
                        }
                    </button>
                    <ul className={`bg-blue-300 absolute md:hidden left-0 w-full duration-1000 ${open ? "top-12" : "-top-40"}`}>
                        {
                            links
                        }
                    </ul>
                    <h3 className="ml-4 md:ml-0">NavBar</h3>
                </div>
                <ul className="hidden md:flex">
                    {
                        links
                    }
                </ul>
                <button>Sign In</button>
            </nav>
        </div>
    )
}
