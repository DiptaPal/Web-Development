import { use } from 'react';
import Book from '../Book/Book';

const Books = ({ booksPromise }) => {
    const books = use(booksPromise);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-24">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;