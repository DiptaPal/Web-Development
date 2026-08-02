import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import App from './App.jsx';
import About from './components/About/About.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Users from './components/Users/Users.jsx';
import './index.css';

const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "/users/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: "/posts",
        element: <Suspense fallback={<span>Loading...</span>}>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense>
      },
      {
        path: "/posts/:postId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      {
        path: "/blogs",
        loader: () => fetch("https://jsonplaceholder.typicode.com/comments"),
        Component: Blogs
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/signup",
        Component: SignUp
      }
    ]
  },
  {
    path: "*",
    Component: Error
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
