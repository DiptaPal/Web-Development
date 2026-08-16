import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <div className="max-w-300 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;    