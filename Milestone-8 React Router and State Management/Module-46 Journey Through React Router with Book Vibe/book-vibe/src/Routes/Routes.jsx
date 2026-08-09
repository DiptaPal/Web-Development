import { createBrowserRouter } from "react-router";
import BookDetails from "../pages/BookDetails/BookDetails";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import Root from "../pages/Root/Root";



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
                path: "/listed-books",
                loader: () => fetch("/booksData.json"),
                Component: ListedBooks
            },
            {
                path: "/pages-to-read",
                Component: PagesToRead
            },
            {
                path: "/bookDetails/:bookId",
                loader: () => fetch("/booksData.json"),
                Component: BookDetails
            }
        ]
    }
])