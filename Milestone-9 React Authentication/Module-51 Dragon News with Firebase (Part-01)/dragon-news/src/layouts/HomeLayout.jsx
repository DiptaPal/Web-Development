import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header/Header';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';
import LatestNews from '../components/LatestNews.jsx/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import RestOfLeft from '../components/RestOfLeft/RestOfLeft';
import Loading from '../pages/Loading/Loading';
import "./HomeLayout.css";

const HomeLayout = () => {

    const { state } = useNavigation();

    return (
        <div className="max-w-300 mx-auto px-2 md:px-0">
            <Header></Header>
            <section className="mt-5 mb-4">
                <LatestNews></LatestNews>
            </section>
            <section className="mt-10">
                <Navbar></Navbar>
            </section>
            <main className="grid grid-cols-12 gap-6 mt-16">
                <aside className="col-span-12 md:col-span-3 max-h-screen overflow-y-auto hide-scrollbar">
                    <LeftAside></LeftAside>
                    <RestOfLeft></RestOfLeft>
                </aside>

                <section className="col-span-12 md:col-span-6  max-h-screen overflow-y-auto hide-scrollbar">
                    {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>

                <aside className="col-span-12 md:col-span-3 max-h-screen overflow-y-auto hide-scrollbar">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div >
    );
};

export default HomeLayout;