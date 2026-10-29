
const BookLoading = () => {
    return (
        <main className="min-h-screen bg-base-200 px-4 py-10">
            <div className="mx-auto max-w-5xl animate-pulse">
                {/* Back Button Skeleton */}
                <div className="skeleton mb-6 h-10 w-36" />

                {/* Book Details Card */}
                <div className="card overflow-hidden bg-base-100 shadow-xl lg:card-side">
                    {/* Cover Skeleton */}
                    <div className="flex min-h-80 items-center justify-center bg-base-200 p-6 lg:w-2/5">
                        <div className="skeleton h-80 w-56 rounded-xl" />
                    </div>

                    {/* Book Information Skeleton */}
                    <div className="card-body gap-5 lg:w-3/5">
                        {/* Category */}
                        <div className="skeleton h-6 w-24 rounded-full" />

                        {/* Title */}
                        <div className="skeleton h-10 w-4/5" />

                        {/* Author */}
                        <div className="skeleton h-6 w-2/5" />

                        {/* Price and Rating */}
                        <div className="flex items-center gap-4">
                            <div className="skeleton h-9 w-28" />
                            <div className="skeleton h-8 w-24 rounded-full" />
                        </div>

                        {/* Description */}
                        <div className="mt-3 space-y-3">
                            <div className="skeleton h-6 w-40" />
                            <div className="skeleton h-4 w-full" />
                            <div className="skeleton h-4 w-full" />
                            <div className="skeleton h-4 w-3/4" />
                        </div>

                        <div className="divider my-1" />

                        {/* Book Information Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="skeleton h-4 w-28" />
                                    <div className="skeleton h-5 w-20" />
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 flex gap-3">
                            <div className="skeleton h-12 flex-1 rounded-lg" />
                            <div className="skeleton h-12 w-36 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookLoading;
