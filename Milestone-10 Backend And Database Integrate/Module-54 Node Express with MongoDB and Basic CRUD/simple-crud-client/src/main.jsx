import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './App.jsx';
import HydrateFallback from './components/HydrateFallback/HydrateFallback.jsx';
import UpdateUser from './components/UpdateUser/UpdateUser.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    HydrateFallback: HydrateFallback,
  },
  {
    path: "users/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UserDetails,
    HydrateFallback: HydrateFallback,
  },
  {
    path: "update/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UpdateUser,
    HydrateFallback: HydrateFallback,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
