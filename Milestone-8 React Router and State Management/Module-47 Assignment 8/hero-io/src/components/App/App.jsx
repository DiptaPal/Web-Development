import { MdOutlineFileDownload, MdOutlineStar } from "react-icons/md";
import { Link } from 'react-router';
import { convertDownload } from "../../utility/conversion";

const App = ({ app }) => {
    const { id, image, title, ratingAvg, downloads } = app;
    const conDownloads = convertDownload(downloads);

    return (
        <Link to={`/apps/appDetails/${id}`} className="p-4 bg-white rounded shadow space-y-3">
            <img className="rounded-lg" src={image} alt="" />
            <h3 className="text-xl font-medium">{title}</h3>
            <div className="flex justify-between items-center gap-2">
                <div className="text-[#00D390] flex justify-center items-center gap-1 font-medium bg-[#F1F5E8] py-1.5 px-2.5 rounded">
                    <MdOutlineFileDownload className="text-xl" />
                    <p>{conDownloads}</p>
                </div>
                <div className="text-[#FF8811] flex justify-center items-center gap-1 font-medium bg-[#FFF0E1] py-1.5 px-2.5 rounded">
                    <MdOutlineStar className="text-xl" />
                    <p>{ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default App;