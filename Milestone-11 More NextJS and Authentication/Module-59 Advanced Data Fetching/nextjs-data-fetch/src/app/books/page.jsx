import Book from "@/components/Book/Book";


/* 

* cache: no-store -> 
It will fetch the data on every request, and it will not cache the data. SSR (Server-Side Rendering)

*

* cache: force-cache -> 
It will cache the data, and it will not fetch the data on every request. SSG (Static Site Generation)

*

* revalidate: 20 -> 
It will cache the data for 20 seconds, and it will fetch the data after 20 seconds. ISR(Incremental Static Regeneration)

*/
const BooksPage = async () => {

    const res = await fetch("http://localhost:3004/books", { cache: "no-store" });
    const books = await res.json();

    return (
        <div className="px-2">
            <h2 className="py-2">Total Books: {books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default BooksPage;