const BidsSkeleton = () => {
    const skeletonRows = Array.from({ length:  3});

    return (
        <div className="bg-[#F8F9FA] p-4 sm:p-8 lg:p-12 text-slate-800">
            <div className="space-y-6">

                {/* Table */}
                <div className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">

                        <table className="table w-full border-collapse">

                            {/* Table Head */}
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                    <th className="py-4 px-6">
                                        <div className="skeleton h-4 w-12"></div>
                                    </th>

                                    <th className="py-4 px-6">
                                        <div className="skeleton h-4 w-20"></div>
                                    </th>

                                    <th className="py-4 px-6">
                                        <div className="skeleton h-4 w-16"></div>
                                    </th>

                                    <th className="py-4 px-6">
                                        <div className="skeleton h-4 w-20"></div>
                                    </th>

                                    <th className="py-4 px-6">
                                        <div className="skeleton h-4 w-20"></div>
                                    </th>
                                </tr>
                            </thead>

                            {/* Skeleton Body */}
                            <tbody className="divide-y divide-slate-100">

                                {skeletonRows.map((_, index) => (
                                    <tr key={index}>

                                        {/* SL No */}
                                        <td className="py-4 px-6">
                                            <div className="skeleton h-5 w-6"></div>
                                        </td>

                                        {/* Product */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">

                                                {/* Product Image */}
                                                <div className="skeleton w-12 h-10 rounded-lg shrink-0"></div>

                                                {/* Product Information */}
                                                <div className="space-y-2">
                                                    <div className="skeleton h-4 w-32 sm:w-40"></div>
                                                    <div className="skeleton h-3 w-20"></div>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Seller */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">

                                                {/* Seller Image */}
                                                <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>

                                                {/* Seller Information */}
                                                <div className="space-y-2">
                                                    <div className="skeleton h-4 w-28 sm:w-36"></div>
                                                    <div className="skeleton h-3 w-36 sm:w-44"></div>
                                                </div>

                                            </div>
                                        </td>

                                        {/* Bid Price */}
                                        <td className="py-4 px-6">
                                            <div className="skeleton h-5 w-20"></div>
                                        </td>

                                        {/* Actions */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <div className="skeleton h-8 w-24 rounded-lg"></div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidsSkeleton;