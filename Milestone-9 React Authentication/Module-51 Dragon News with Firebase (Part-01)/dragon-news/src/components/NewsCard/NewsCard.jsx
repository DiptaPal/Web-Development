import { format } from 'date-fns';
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineBookmarkBorder, MdOutlineShare } from "react-icons/md";
import { Link } from 'react-router';
import StarRating from '../StarRating/StarRating';

const NewsCard = ({ news }) => {

    const date = news.author.published_date;
    const formattedDate = format(new Date(date), "yyyy-MM-dd");

    return (
        <div className="rounded border border-base-300">
            <div className="flex justify-between items-center bg-base-200 p-5 rounded-t">
                <div className="flex items-center gap-3">
                    <div>
                        <img className="w-10 h-10 rounded-full" src={news.author.img} alt="" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">{news.author.name}</h4>
                        <p className="text-sm text-accent">{formattedDate}</p>
                    </div>
                </div>
                <div className="text-accent flex justify-center items-center gap-2.5">
                    <MdOutlineBookmarkBorder size={24} />
                    <MdOutlineShare size={24} />
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-primary text-xl font-bold">{news.title}</h3>
                <img src={news?.thumbnail_url} className="my-5 rounded w-full max-h-80 object-cover" alt={news.title} />
                <div className="text-justify text-accent">
                    {
                        news.details.length > 300 ?
                            (
                                <>
                                    {news.details.slice(0, 300)}...
                                    <Link to={`/news-details/${news._id}`} className="text-[#FF8C47] font-semibold cursor-pointer">
                                        Read More
                                    </Link>
                                </>
                            )
                            :
                            (
                                news.details
                            )
                    }
                </div>
                <div className="bg-base-300 h-px my-5"></div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                        <div className="flex items-center gap-1">
                            <StarRating rating={news.rating.number} />
                        </div>
                        <p className="text-accent font-medium">{news.rating.number}</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <IoEyeSharp size={24} className="text-accent" />
                        <p className="text-accent font-medium">{news.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;