
const EditProductSkeleton = () => {
    return (
        <div className="w-full bg-white rounded-lg shadow p-6 space-y-6">
            {/* Title + Category */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-16 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                </div>
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-20 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                </div>
            </div>
            {/* Min Price + Max Price */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-48 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                </div>
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-52 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                </div>
            </div>
            {/* Condition + Usage */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="form-control w-full space-y-3">
                    <div className="skeleton h-4 w-36 rounded"></div>
                    <div className="flex gap-8">
                        <div className="flex items-center gap-3">
                            <div className="skeleton w-4 h-4 rounded-full"></div>
                            <div className="skeleton h-4 w-20 rounded"></div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="skeleton w-4 h-4 rounded-full"></div>
                            <div className="skeleton h-4 w-12 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-36 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                </div>
            </div>
            {/* Product Image */}
            <div className="form-control w-full space-y-2">
                <div className="skeleton h-4 w-36 rounded"></div>
                <div className="skeleton h-12 w-full rounded-lg"></div>
                <div className="skeleton h-3 w-64 rounded"></div>
            </div>
            {/* Seller Name + Email */}
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-24 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                </div>
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-24 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                </div>
            </div>
            {/* Seller Contact + Seller Image */}
            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-28 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                </div>
                <div className="form-control w-full space-y-2">
                    <div className="skeleton h-4 w-24 rounded"></div>
                    <div className="skeleton h-12 w-full rounded-lg"></div>
                    <div className="skeleton h-3 w-64 rounded"></div>
                </div>
            </div>
            {/* Location */}
            <div className="form-control w-full space-y-2">
                <div className="skeleton h-4 w-20 rounded"></div>
                <div className="skeleton h-12 w-full rounded-lg"></div>
            </div>
            {/* Description */}
            <div className="form-control w-full space-y-2">
                <div className="skeleton h-4 w-64 rounded"></div>
                <div className="skeleton h-32 w-full rounded-lg"></div>
            </div>
            {/* Submit button */}
            <div className="skeleton h-12 w-full rounded-md"></div>
        </div>
    );
};

export default EditProductSkeleton;