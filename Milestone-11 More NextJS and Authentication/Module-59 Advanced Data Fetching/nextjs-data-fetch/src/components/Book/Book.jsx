"use client"
import Image from "next/image";
import Link from "next/link";

const Book = ({ book }) => {
    const {
        id,
        title,
        author,
        price,
        description,
        image,
        category,
        rating,
        stock,
        publishedYear,
    } = book;

    return (
        <div className="card w-full overflow-hidden border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Book Cover */}
            <figure className="relative h-72 w-full bg-base-200">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-3"
                />

                <span className="badge badge-primary absolute left-3 top-3 z-10">
                    {category}
                </span>
            </figure>

            {/* Book Details */}
            <div className="card-body gap-3">
                <h2 className="card-title text-lg">{title}</h2>

                <p className="text-sm text-base-content/70">
                    By {author}
                </p>

                <p className="text-sm leading-6 text-base-content/80">
                    {description}
                </p>

                <div className="flex items-center justify-between gap-2">
                    <span className="text-xl font-bold text-primary">
                        £{Number(price).toFixed(2)}
                    </span>

                    <span className="text-sm text-base-content/60">
                        {publishedYear}
                    </span>
                </div>

                {/* Rating and Stock */}
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm font-medium">
                        <span className="text-warning">★</span>
                        {rating}/5
                    </span>

                    <span
                        className={`badge ${stock > 0 ? "badge-success" : "badge-error"
                            }`}
                    >
                        {stock > 0 ? `${stock} in stock` : "Out of stock"}
                    </span>
                </div>

                {/* Actions */}
                <div className="card-actions mt-2">
                    <button
                        className="btn btn-primary flex-1"
                        disabled={stock <= 0}
                        onClick={() => console.log("Add book to cart:", id)}
                    >
                        Add to Cart
                    </button>

                    <Link href={`/books/${id}`}
                        className="btn btn-outline"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Book;
