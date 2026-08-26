import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Main = () => {
    return (
        <div className="flex flex-col justify-center items-center m-40">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;