import { createBrowserRouter } from 'react-router';
import Root from './../Layout/Root';
import Dashboard from './../pages/Dashboard/Dashboard';
import Error from './../pages/Error/Error';
import Home from './../pages/Home/Home';
import Login from './../pages/Login/Login';
import Orders from './../pages/Orders/Orders';
import Profile from './../pages/Profile/Profile';
import Registration from './../pages/Registration/Registration';
import PrivateRoute from './PrivateRoute';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "login",
                Component: Login,
            },
            {
                path: "registration",
                Component: Registration,
            },
            {
                path: "dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: "orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>,
            },
        ]
    }
])