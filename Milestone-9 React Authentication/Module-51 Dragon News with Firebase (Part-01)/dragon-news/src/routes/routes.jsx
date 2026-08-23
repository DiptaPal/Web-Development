import { createBrowserRouter } from 'react-router';
import About from '../pages/About/About';
import CategoryNews from '../pages/CategoryNews/CategoryNews';
import Home from '../pages/Home/Home';
import Loading from '../pages/Loading/Loading';
import AuthLayout from './../layouts/AuthLayout';
import HomeLayout from './../layouts/HomeLayout';
import NewsLayout from './../layouts/NewsLayout';
import Error from './../pages/Error/Error';
import Login from './../pages/Login/Login';
import Registration from './../pages/Registration/Registration';
import PrivateRoute from './PrivateRoute';
import Career from '../pages/Career/Career';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        HydrateFallback: Loading,
        loader: () => fetch("https://openapi.programming-hero.com/api/news/category/08"),
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "category/:id",
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                Component: CategoryNews
            }
        ]
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login,
            },
            {
                path: "registration",
                Component: Registration
            }
        ]
    },
    {
        path: "/news-details/:id",
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
        element: <PrivateRoute><NewsLayout></NewsLayout></PrivateRoute>
    },
    {
        path: "about",
        Component: About
    },
    {
        path: "career",
        Component: Career
    },
    {
        path: "*",
        Component: Error
    }
])