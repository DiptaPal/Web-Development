import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const { id } = useParams();
    const { data } = useLoaderData();

    const filterData = data.find(news => news._id === id);

    return (
        <div>
            <h3 className="text-xl font-semibold text-primary mb-5">Dragon News</h3>
            <div className="rounded border border-base-300 p-5">
                <img src={filterData?.image_url} className="my-5 rounded w-full" alt={filterData.title} />
                <h3 className="text-primary text-2xl font-bold">{filterData.title}</h3>
                <div className="text-justify text-accent mt-5">
                    {
                        filterData.details
                    }
                </div>
                <Link to={`/category/${filterData.category_id}`} className="text-white bg-secondary py-3 px-6 mt-5 flex justify-center items-center gap-3 cursor-pointer w-fit">
                    <FaArrowLeftLong />
                    <span>All news in this category</span>
                </Link>
            </div>
        </div>
    );
};

export default NewsDetails;