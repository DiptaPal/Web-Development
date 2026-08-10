import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Loader from './../../components/Loader/Loader';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div className="font-inter">
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            {navigation.state === "loading" && <Loader />}
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;