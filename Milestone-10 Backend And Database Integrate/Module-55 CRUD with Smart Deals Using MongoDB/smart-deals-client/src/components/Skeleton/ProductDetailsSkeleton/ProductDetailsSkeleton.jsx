
const ProductDetailsSkeleton = () => {
    return (
        <div className="min-h-screen bg-[#F8F9FA] p-4 sm:p-6 lg:p-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* LEFT COLUMN: Main Image & Product Description */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    {/* Main Product Image Skeleton */}
                    <div className="skeleton w-full aspect-4/3 sm:aspect-square rounded-2xl"></div>

                    {/* Product Description Card Skeleton */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
                        <div className="skeleton h-6 w-44 rounded-md"></div>

                        {/* Condition & Usage Time Skeleton */}
                        <div className="flex justify-between items-center py-2 border-b border-slate-100">
                            <div className="skeleton h-4 w-28 rounded-md"></div>
                            <div className="skeleton h-4 w-32 rounded-md"></div>
                        </div>

                        {/* Text Paragraph Lines Skeleton */}
                        <div className="space-y-2 pt-1">
                            <div className="skeleton h-3 w-full rounded-md"></div>
                            <div className="skeleton h-3 w-full rounded-md"></div>
                            <div className="skeleton h-3 w-11/12 rounded-md"></div>
                            <div className="skeleton h-3 w-4/5 rounded-md"></div>
                            <div className="skeleton h-3 w-full rounded-md"></div>
                            <div className="skeleton h-3 w-3/4 rounded-md"></div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Details, Pricing, Seller Info & Action */}
                <div className="lg:col-span-7 flex flex-col gap-5">

                    {/* Back Button Skeleton */}
                    <div className="skeleton h-5 w-36 rounded-md"></div>

                    {/* Product Title Skeleton */}
                    <div className="skeleton h-9 w-3/4 rounded-lg"></div>

                    {/* Category Badge Skeleton */}
                    <div className="skeleton h-6 w-28 rounded-md"></div>

                    {/* Price Card Skeleton */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-2">
                        <div className="skeleton h-8 w-36 rounded-md"></div>
                        <div className="skeleton h-3 w-24 rounded-md"></div>
                    </div>

                    {/* Product Details Card Skeleton */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-3">
                        <div className="skeleton h-6 w-32 rounded-md"></div>
                        <div className="space-y-2 pt-1">
                            <div className="skeleton h-4 w-64 rounded-md"></div>
                            <div className="skeleton h-4 w-40 rounded-md"></div>
                        </div>
                    </div>

                    {/* Seller Information Card Skeleton */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
                        <div className="skeleton h-6 w-40 rounded-md"></div>

                        {/* Avatar & Name Skeleton */}
                        <div className="flex items-center gap-3">
                            <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
                            <div className="space-y-2">
                                <div className="skeleton h-4 w-28 rounded-md"></div>
                                <div className="skeleton h-3 w-40 rounded-md"></div>
                            </div>
                        </div>

                        {/* Location & Contact Skeleton */}
                        <div className="space-y-2 pt-1">
                            <div className="skeleton h-4 w-48 rounded-md"></div>
                            <div className="skeleton h-4 w-52 rounded-md"></div>
                            <div className="skeleton h-5 w-24 rounded-md"></div>
                        </div>
                    </div>

                    {/* Buy Button Skeleton */}
                    <div className="skeleton h-12 w-full rounded-xl"></div>

                </div>

            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;