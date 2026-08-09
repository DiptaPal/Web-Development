import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";
const Root = () => {
    return (
        <div className="max-w-300 mx-auto font-playfair">
            <Navbar></Navbar>
            <div className="px-2 lg:px-0">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;