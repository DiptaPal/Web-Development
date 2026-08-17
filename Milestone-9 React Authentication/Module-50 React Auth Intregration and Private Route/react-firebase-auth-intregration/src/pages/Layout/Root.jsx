import { Outlet } from 'react-router';
import Footer from './../../components/Footer/Footer';
import Navbar from './../../components/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;