import { createBrowserRouter } from 'react-router';
import AppDetails from '../pages/AppDetails/AppDetails';
import Apps from '../pages/Apps/Apps';
import Error from '../pages/Error/Error';
import Root from '../pages/Root/Root';
import AppError from './../pages/AppError/AppError';
import Home from './../pages/Home/Home';
import Installation from './../pages/Installation/Installation';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch("/appsData.json"),
                Component: Home
            },
            {
                path: "/apps",
                loader: () => fetch("/appsData.json"),
                Component: Apps
            },
            {
                path: "/apps/appDetails/:id",
                loader: async ({ params }) => {
                    const response = await fetch("/appsData.json");
                    const apps = await response.json();

                    const app = apps.find(
                        app => app.id === Number(params.id)
                    );

                    if (!app) {
                        throw new Response("App Not Found", {
                            status: 404,
                        });
                    }

                    return app;
                },
                errorElement: <AppError></AppError>,
                Component: AppDetails
            },
            {
                path: "/installation",
                loader: () => fetch("/appsData.json"),
                Component: Installation
            },
            {
                path: "*",
                Component: Error
            }
        ]
    }
])