import Header from "../components/Header/Header";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import RightAside from './../components/HomeLayout/RightAside';

const NewsLayout = () => {
    return (
        <div className="max-w-300 mx-auto px-2 md:px-0">
            <div>
                <Header></Header>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <aside className="col-span-9">
                    <NewsDetails></NewsDetails>
                </aside>
                <aside className="col-span-3">
                    <RightAside></RightAside>
                </aside>
            </div>
        </div>
    );
};

export default NewsLayout;