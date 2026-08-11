import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/login",
                Component: Login
            }
        ]
    }
])
