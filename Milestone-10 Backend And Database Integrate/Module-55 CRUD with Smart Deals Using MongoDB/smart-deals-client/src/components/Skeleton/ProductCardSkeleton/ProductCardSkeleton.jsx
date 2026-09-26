const ProductCardSkeleton = () => {
    return (
        <div className="p-4 rounded-lg bg-white shadow flex flex-col animate-pulse">

            {/* Image */}
            <div className="rounded-lg w-full h-60 bg-gray-200"></div>

            {/* Content */}
            <div className="flex-1 space-y-2 mt-2">

                {/* Title */}
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>

                {/* Price */}
                <div className="h-5 bg-gray-200 rounded w-1/2"></div>

            </div>

            {/* Button */}
            <div className="h-12 bg-gray-200 rounded-md w-full mt-2"></div>

        </div>
    );
};

export default ProductCardSkeleton;