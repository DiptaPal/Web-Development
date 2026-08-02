import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./Root.css";


const Root = () => {

    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location);

    return (
        <div>
            <Header />
            <div className="root-main">
                <SideBar />
                {
                    isNavigation && <span>Loading...</span>
                }
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};

export default Root;

/* 
    1. use: usersPromise > Suspense > promise > use(usersPromise)
    2. [Less used so far] > useState + useEffect ( () => {}, [])
    3. Set the loader in route definition: load data before router component is rendered


*/
