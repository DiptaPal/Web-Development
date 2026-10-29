'use client'
import Image from "next/image";

const Product = ({ product }) => {
    const {
        id,
        name,
        price,
        description,
        image,
        category,
        rating,
        stock,
    } = product;

    return (
        <div className="card bg-base-100 w-full overflow-hidden border border-base-300 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Product Image */}
            <figure className="relative h-56 w-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                />

                <span className="badge badge-primary absolute left-3 top-3 z-10">
                    {category}
                </span>
            </figure>

            {/* Product Details */}
            <div className="card-body gap-3">
                <div className="flex items-start justify-between gap-3">
                    <h2 className="card-title text-lg">{name}</h2>

                    <span className="text-lg font-bold text-primary">
                        £{Number(price).toFixed(2)}
                    </span>
                </div>

                <p className="text-sm text-base-content/70">
                    {description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="text-warning">★</span>
                        <span className="text-sm font-medium">
                            {rating}/5
                        </span>
                    </div>

                    <span
                        className={`badge ${stock > 0 ? "badge-success" : "badge-error"
                            }`}
                    >
                        {stock > 0 ? `${stock} in stock` : "Out of stock"}
                    </span>
                </div>

                <div className="card-actions mt-2">
                    <button
                        className="btn btn-primary flex-1"
                        disabled={stock <= 0}
                        onClick={() => console.log("Add to cart:", id)}
                    >
                        Add to Cart
                    </button>

                    <button
                        className="btn btn-outline"
                        onClick={() => console.log("View product:", id)}
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
