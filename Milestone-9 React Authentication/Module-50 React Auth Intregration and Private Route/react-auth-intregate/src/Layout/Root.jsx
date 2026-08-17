import { Outlet } from 'react-router';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-10 text-center">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;