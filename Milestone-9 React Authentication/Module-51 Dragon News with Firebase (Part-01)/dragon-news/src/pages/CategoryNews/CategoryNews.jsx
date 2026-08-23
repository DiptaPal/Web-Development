import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const CategoryNews = () => {

    const { id } = useParams();
    const { data } = useLoaderData();


    // const categoryNews =
    //     categoryId === 0
    //         ? data
    //         : categoryId === 1
    //             ? data.filter(news => news.others?.is_today_pick)
    //             : data.filter(news => news.category_id === categoryId);

    const categoryNews = id === "08" ? data : data.filter(news => news.category_id === id);



    return (
        <div>
            {
                categoryNews.length === 0 ?

                    <div className="text-xl font-semibold text-center">
                        <h3>Sorry! We don't have any cultural news.</h3>
                    </div>
                    :
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-5">Dragon News Home</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {
                                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default CategoryNews;