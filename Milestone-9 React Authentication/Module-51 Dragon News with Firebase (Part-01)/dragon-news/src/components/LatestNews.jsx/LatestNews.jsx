import MarqueePackage from 'react-fast-marquee';
import { useLoaderData } from 'react-router';

// Extract default if it's nested inside an object
const Marquee = MarqueePackage.default || MarqueePackage;

const LatestNews = () => {

    const { data } = useLoaderData();

    const breakingNews = data.filter(news => news.others_info?.is_trending);

    return (
        <div className="flex items-center gap-4 bg-base-200 p-4">
            <p className="text-white bg-secondary py-1 md:py-2 px-3 md:px-6 text-sm  md:text-lg font-medium">Latest</p>
            <Marquee speed={60} pauseOnHover={true} gradient={false}>
                {
                    breakingNews.map(news => <p key={news._id} className="text-xs md:text-xl font-semibold mx-4">{news.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;