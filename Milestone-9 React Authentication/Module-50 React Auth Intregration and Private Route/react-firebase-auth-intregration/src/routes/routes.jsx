import { createBrowserRouter } from 'react-router';
import Dashboard from '../pages/Dashboard/Dashboard';
import Root from '../pages/Layout/Root';
import Orders from '../pages/Orders/Orders';
import Profile from '../pages/Profile/Profile';
import Registration from '../pages/Registration/Registration';
import Error from './../pages/Error/Error';
import Home from './../pages/Home/Home';
import Login from './../pages/Login/Login';
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
                path: "orders",
                element: <PrivateRoute><Orders /></PrivateRoute>
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: "dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            }
        ]
    }
])