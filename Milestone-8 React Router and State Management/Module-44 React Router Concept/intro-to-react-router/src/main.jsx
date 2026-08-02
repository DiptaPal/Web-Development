import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Laptops from './components/Laptops/Laptops.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import Root from './components/Root/Root.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import './index.css';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World</div>,
//   },
// ]);

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "mobiles", Component: Mobiles
      },
      {
        path: "laptops", Component: Laptops
      },
      {
        path: "about",
        element: <div>About me here</div>
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path: "users/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts
      },
      {
        path: "posts/:postId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      }
    ]
  },
  {
    path: "blogs",
    element: <div>All my blogs are here</div>
  },
  {
    path: "app",
    Component: App
  },
  {
    path: "*",
    Component: Error
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
