import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Restristration';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Registration
            }
        ]
    }
])
