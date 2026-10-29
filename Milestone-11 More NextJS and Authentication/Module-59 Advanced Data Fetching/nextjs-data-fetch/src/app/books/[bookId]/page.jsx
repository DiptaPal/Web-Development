
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:3004/books");
    const books = await res.json();

    // data format: [ {bookId: 1}, {bookId: 2}, {bookId: 3} ]
    return books.slice(1, 4).map(book => ({
        bookId: book.id
    }))
}

const BookDetailsPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(
        `http://localhost:3004/books/${bookId}`
    );

    if (!res.ok) {
        notFound();
    }

    const book = await res.json();

    return (
        <main className="min-h-screen bg-base-200 px-4 py-10">
            <div className="mx-auto max-w-5xl">
                {/* Back Button */}
                <Link
                    href="/books"
                    className="btn btn-ghost mb-6"
                >
                    ← Back to Books
                </Link>

                {/* Book Details Card */}
                <div className="card overflow-hidden bg-base-100 shadow-xl lg:card-side">
                    {/* Book Cover */}
                    <figure className="relative min-h-80 bg-base-200 p-6 lg:w-2/5">
                        <Image
                            src={book.image}
                            alt={book.title}
                            width={400}
                            height={550}
                            sizes="(max-width: 1024px) 100vw, 400px"
                            className="max-h-[450px] w-full object-contain"
                            priority
                        />
                    </figure>

                    {/* Book Information */}
                    <div className="card-body gap-4 lg:w-3/5">
                        <div>
                            <span className="badge badge-primary badge-outline">
                                {book.category}
                            </span>

                            <h1 className="mt-3 text-3xl font-bold md:text-4xl">
                                {book.title}
                            </h1>

                            <p className="mt-2 text-lg text-base-content/70">
                                By {book.author}
                            </p>
                        </div>

                        {/* Price and Rating */}
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="text-3xl font-bold text-primary">
                                £{Number(book.price).toFixed(2)}
                            </span>

                            <span className="badge badge-warning gap-1 p-3">
                                ★ {book.rating ?? "N/A"} / 5
                            </span>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="mb-2 text-lg font-semibold">
                                About This Book
                            </h2>

                            <p className="leading-7 text-base-content/80">
                                {book.description}
                            </p>
                        </div>

                        {/* Additional Information */}
                        <div className="divider my-1" />

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-base-content/60">
                                    Publication Year
                                </p>
                                <p className="font-semibold">
                                    {book.publishedYear ?? "Not available"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-base-content/60">
                                    Available Stock
                                </p>
                                <p className="font-semibold">
                                    {book.stock ?? "Not available"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-base-content/60">
                                    Book ID
                                </p>
                                <p className="font-semibold">{book.id}</p>
                            </div>

                            <div>
                                <p className="text-sm text-base-content/60">
                                    Category
                                </p>
                                <p className="font-semibold">{book.category}</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="card-actions mt-4">
                            <button
                                className="btn btn-primary flex-1"
                                disabled={Number(book.stock) <= 0}
                            >
                                {Number(book.stock) <= 0
                                    ? "Out of Stock"
                                    : "Add to Cart"}
                            </button>

                            <Link href="/books" className="btn btn-outline">
                                Browse Books
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookDetailsPage;
