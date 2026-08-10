import { Link, useLoaderData } from 'react-router';
import App from '../App/App';

const TopApps = () => {
    const appsData = useLoaderData();
    const apps = appsData.slice(0, 8);

    return (
        <div className="bg-[#F5F5F5] py-5 md:py-10 lg:py-20">
            <div className="max-w-300 mx-auto px-2 lg:px-0">
                <div className="text-center">
                    <h2 className="text-2xl md:text-5xl text-[#001931] font-bold">Trending Apps</h2>
                    <p className="mt-4 text-xl text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="mt-5 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        apps.map(app => <App key={app.id} app={app}></App>)
                    }
                </div>
                <div className="flex justify-center items-center mt-5 md:mt-10">
                    <Link to="/apps" className="font-semibold py-3 px-4 rounded text-center bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white">Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default TopApps;