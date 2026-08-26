import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter
} from "react-router";
import { RouterProvider } from 'react-router/dom';
import Phone from './Components/Phone/Phone';
import './index.css';
import Home from './Pages/Home/Home.jsx';
import Main from './Pages/Main/Main.jsx';
import Phones from './Pages/Phones/Phones.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/phones",
        loader: () => fetch("http://localhost:5000/phones"),
        element: <Phones />
      },
      {
        path: "/phones/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`),
        element: <Phone />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
