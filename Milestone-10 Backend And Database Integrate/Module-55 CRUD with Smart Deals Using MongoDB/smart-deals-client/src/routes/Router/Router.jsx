import { createBrowserRouter } from 'react-router';
import Main from '../../layouts/Main/Main';
import AllProduct from '../../pages/AllProducts/AllProducts';
import CreateProduct from '../../pages/CreateProduct/CreateProduct';
import EditProduct from '../../pages/EditProduct/EditProduct';
import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import MyBids from '../../pages/MyBids/MyBids';
import MyProducts from '../../pages/MyProducts/MyProducts';
import ProductDetails from '../../pages/ProductDetails/ProductDetails';
import Register from '../../pages/Register/Register';
import PrivateRoute from './PrivateRoute';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "allProducts",
                Component: AllProduct
            },
            {
                path: "myProducts",
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },
            {
                path: "productDetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
            },
            {
                path: "myBids",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path: "createProduct",
                element: <PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>
            },
            {
                path: "editProduct/:id",
                element: <PrivateRoute><EditProduct></EditProduct></PrivateRoute>
            },
            {
                path: "register",
                Component: Register
            },
            {
                path: "login",
                Component: Login
            }
        ]
    },
    {
        path: "*",
        Component: Error
    }
])