import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from 'react-router';
import InstallationList from "../../components/InstallationList/InstallationList";
import { getAppsFromLS, uninstallAppFromLS } from "../../utility/addToLS";

const Installation = () => {
    const apps = useLoaderData();
    const storedAppsId = getAppsFromLS();
    const [storedApps, setStoredApps] = useState(apps.filter((app) => storedAppsId.includes(app.id)));

    const handleUninstall = (id) => {
        uninstallAppFromLS(id);
        setStoredApps(apps.filter(app => getAppsFromLS().includes(app.id)));
    }

    const [sorted, setSorted] = useState("");

    const handleSort = (sortBy) => {
        setSorted(sortBy);
        if (sortBy === "low-high") {
            const sortedApps = [...storedApps].sort((a, b) => a.downloads - b.downloads)
            setStoredApps(sortedApps);
        } else if (sortBy === "high-low") {
            const sortedApps = [...storedApps].sort((a, b) => b.downloads - a.downloads)
            setStoredApps(sortedApps);
        } else {
            const defaultApps = apps.filter(app => getAppsFromLS().includes(app.id));
            setStoredApps(defaultApps);
        }
    }

    return (
        <div className="bg-[#F5F5F5]">
            <div className="max-w-300 mx-auto py-5 md:py-10 lg:py-20 px-2 lg:px-0">
                <div className="text-center pb-3 md:pb-7 lg:pb-10">
                    <h2 className="text-2xl md:text-5xl text-[#001931] font-bold">Your Installed Apps</h2>
                    <p className="mt-4 text-xl text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <h3 className="text-lg md:text-2xl font-semibold">({storedAppsId.length}) Apps Found</h3>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn text-[#627382] gap-1 border border-[#D2D2D2] py-2 px-4 rounded max-w-100 w-full md:w-auto m-1">Sort By<span className="capitalize">{sorted}</span><IoMdArrowDropdown className="text-xl" /> </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => {
                                handleSort("")
                            }}>Default</a></li>
                            <li><a onClick={() => {
                                handleSort("high-low")
                            }}>High-Low</a></li>
                            <li><a onClick={() => {
                                handleSort("low-high");
                            }}>Low-High</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {
                        storedApps.map((app) => <InstallationList key={app?.id} app={app} handleUninstall={handleUninstall}></InstallationList>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Installation;