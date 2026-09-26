import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../api/axios';
import { useUpdateStatus } from '../../hooks/useUpdateStatus';
import BidsSkeleton from './../Skeleton/BidsSkeleton/BidsSkeleton';

const ProductBidsTable = ({ isMyProduct, productId, setIsBided, user }) => {

    // bids collect for single product
    const { data: bids = [], isLoading, isError, error } = useQuery({
        queryKey: ["product-bids", productId],
        queryFn: async () => {
            const response = await api.get(`/product-bids/${productId}`);
            return response.data;
        },
        staleTime: Infinity,
        gcTime: Infinity
    });

    useEffect(() => {
        const hasBided = bids.some(
            (bid) => bid.buyer_email === user?.email
        );

        setIsBided(hasBided);
    }, [bids, user, setIsBided]);

    const { mutate, isPending } = useUpdateStatus();

    const handleStatusUpdate = (data) => {
        mutate(data);
        toast.success("Status Updated!");
    }

    return (
        <div>
            {
                isError
                &&
                <p className="text-center mt-5 text-red-500">
                    {error.message}
                </p>
            }
            <div>

            </div>
            {
                isLoading
                &&
                <BidsSkeleton></BidsSkeleton>
            }
            <div className="bg-[#F8F9FA] p-4 sm:p-8 lg:p-12 text-slate-800">
                <div className="space-y-6">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                        Bids For This Products: <span className="text-[#A855F7]">
                            {
                                bids.length < 10
                                    ?
                                    `0${bids.length}`
                                    :
                                    bids.length}
                        </span>
                    </h1>

                    <div className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="table w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-500 text-xs sm:text-sm font-semibold">
                                        <th className="py-4 px-6 text-left">SL No</th>
                                        <th className="py-4 px-6 text-left">Product</th>
                                        <th className="py-4 px-6 text-left">Seller</th>
                                        <th className="py-4 px-6 text-left">Bid Price</th>
                                        <th className="py-4 px-6 text-left">Status</th>
                                        {
                                            isMyProduct &&
                                            <th className="py-4 px-6 text-left">Actions</th>
                                        }
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                                    {bids.map((bid, index) => (
                                        <tr key={bid._id} className="hover:bg-slate-50/50 transition-colors">


                                            <td className="py-4 px-6 font-semibold text-slate-800">
                                                {index + 1}
                                            </td>


                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-10 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                                                        <img
                                                            src={bid.product_image}
                                                            alt={bid.product_name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-slate-900 leading-snug">
                                                            {bid.product_name}
                                                        </p>
                                                        <p className="text-xs text-slate-400 font-medium">
                                                            ${bid.price_min} - {bid.price_max}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>


                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden shrink-0">
                                                        <img
                                                            src={bid.buyer_image}
                                                            alt={bid.buyer_name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-slate-900 leading-snug">
                                                            {bid.buyer_name}
                                                        </p>
                                                        <p className="text-xs text-slate-400 font-medium">
                                                            {bid.buyer_email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>


                                            <td className="py-4 px-6 font-medium text-slate-900">
                                                {bid.bid_price}
                                            </td>

                                            <td className={`py-4 px-6 font-medium capitalize ${bid.status === "pending" && "text-yellow-400"} ${bid.status === "rejected" && "text-red-500"} ${bid.status === "accepted" && "text-emerald-500"}`}>
                                                {bid.status}
                                            </td>

                                            {
                                                isMyProduct &&
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => handleStatusUpdate({
                                                                bidId: bid._id,
                                                                status: "accepted"
                                                            })}
                                                            disabled={isPending || bid.status === "accepted"}
                                                            className="btn btn-xs sm:btn-sm btn-outline border-emerald-400 text-emerald-500 hover:bg-emerald-50 hover:border-emerald-500 font-medium rounded-md capitalize px-3">
                                                            Accept Offer
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusUpdate({
                                                                bidId: bid._id,
                                                                status: "rejected"
                                                            })}
                                                            disabled={isPending || bid.status === "rejected"}
                                                            className="btn btn-xs sm:btn-sm btn-outline border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 font-medium rounded-md capitalize px-3">
                                                            Reject Offer
                                                        </button>
                                                    </div>
                                                </td>
                                            }
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductBidsTable;