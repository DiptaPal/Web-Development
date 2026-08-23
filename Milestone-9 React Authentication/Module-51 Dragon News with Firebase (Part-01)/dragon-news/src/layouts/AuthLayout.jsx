import { Outlet } from 'react-router';
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
    return (
        <div className="max-w-300 mx-auto px-2 md:px-0">
            <div className="my-10">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;