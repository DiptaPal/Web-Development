import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { useLoaderData, useNavigation } from 'react-router';
import App from '../../components/App/App';
import Loader from './../../components/Loader/Loader';

const Apps = () => {
    const apps = useLoaderData();
    const navigation = useNavigation();
    const [appsData, setAppsData] = useState(apps);

    const handleSearch = (e) => {
        const userType = e.target.value;

        const filterData = apps.filter(app => app.title.toLowerCase().includes(userType.toLowerCase()));

        setAppsData(filterData)
    }

    return (
        <div className="bg-[#F5F5F5]">
            <div className="max-w-300 mx-auto py-5 md:py-10 lg:py-20 px-2 lg:px-0">
                <div className="text-center pb-3 md:pb-7 lg:pb-10">
                    <h2 className="text-2xl md:text-5xl text-[#001931] font-bold">Our All Applications</h2>
                    <p className="mt-4 text-xl text-[#627382]">Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                    <h3 className="text-lg md:text-2xl font-semibold">({appsData.length}) Apps Found</h3>
                    <div className="flex justify-center items-center text-[#627382] gap-2 border border-[#D2D2D2] py-2 px-4 rounded max-w-100 w-full md:w-auto">
                        <IoIosSearch className="text-xl" />
                        <input onChange={handleSearch} type="text" name="app-name" id="app-name" placeholder="Search Apps" className="outline-none" />
                    </div>
                </div>
                <div>
                    {
                        navigation.state === "loading" ?
                            <Loader />
                            :

                            appsData.length === 0 ? (
                                <div className="text-xl md:text-3xl font-bold text-center my-6 text-[#001931]">
                                    <h3>No App Found</h3>
                                </div>
                            ) : (
                                <div className="mt-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {
                                        appsData.map(app => <App key={app.id} app={app}></App>)
                                    }
                                </div>
                            )

                    }
                </div>
            </div>
        </div >
    );
};

export default Apps;