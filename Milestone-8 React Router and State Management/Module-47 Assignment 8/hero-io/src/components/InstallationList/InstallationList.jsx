import { MdOutlineFileDownload, MdOutlineStar } from "react-icons/md";
import { Link } from 'react-router';
import { convertDownload } from "../../utility/conversion";

const InstallationList = ({ app, handleUninstall }) => {


    const { id, image, title, downloads, ratingAvg, size } = app;
    const conDownloads = convertDownload(downloads);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-2 md:p-4 my-2 md:my-4 bg-white rounded">
            <Link to={`/apps/appDetails/${id}`} className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="flex items-center">
                    <img src={image} className="rounded-lg w-full h-full sm:w-20 sm:h-20 object-cover" alt="app-image" />
                </div>
                <div className="flex flex-col justify-between items-start py-2">
                    <h3 className="text-xl font-medium text-[#001931]">{title}</h3>
                    <div className="flex items-center gap-4">
                        <div className="text-[#00D390] flex justify-center items-center gap-1 font-medium">
                            <MdOutlineFileDownload className="text-xl" />
                            <p>{conDownloads}</p>
                        </div>
                        <div className="text-[#FF8811] flex justify-center items-center gap-1 font-medium">
                            <MdOutlineStar className="text-xl" />
                            <p>{ratingAvg}</p>
                        </div>
                        <div className="text-[#627382] flex justify-center items-center gap-1 font-medium ">
                            <p>{size} MB</p>
                        </div>
                    </div>
                </div>
            </Link>
            <button onClick={() => handleUninstall(id)} className="text-white font-semibold text-base md:text-xl bg-[#00D390] rounded py-2 px-5 cursor-pointer">
                Uninstall
            </button>
        </div>
    );
};

export default InstallationList;