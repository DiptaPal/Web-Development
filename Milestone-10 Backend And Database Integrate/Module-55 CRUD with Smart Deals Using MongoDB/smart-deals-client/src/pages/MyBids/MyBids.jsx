import { useQuery } from '@tanstack/react-query';
import { use } from 'react';
import Swal from "sweetalert2";
import api from '../../api/axios';
import BidsSkeleton from '../../components/Skeleton/BidsSkeleton/BidsSkeleton';
import { useRemoveBid } from '../../hooks/useRemoveBid';
import { AuthContext } from './../../contexts/AuthContext/AuthContext';

const MyBids = () => {

    const { user } = use(AuthContext);

    // bids collect for a user
    const { data: myBids = [], isLoading, isError, error } = useQuery({
        queryKey: ["my-bids", user?.email],
        queryFn: async () => {
            const response = await api.get(`/my-bids/${user?.email}`);
            return response.data;
        },
        enabled: !!user?.email,
        staleTime: Infinity,
        gcTime: Infinity
    });

    const { mutate, isPending } = useRemoveBid();

    const handleRemoveBid = (bidId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to remove this bid?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it!",
            cancelButtonText: "Cancel",
            customClass: {
                confirmButton: "bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer",
                cancelButton: "bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg ml-2 cursor-pointer",
            },
            buttonsStyling: false,
        }).then((result) => {
            if (result.isConfirmed) {
                mutate(bidId);
                Swal.fire({
                    title: "Removed!",
                    text: "Bid removed successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#16a34a",
                });
            }
        });
    }

    return (
        <div className="py-12 bg-[#F8F9FA]">
            <title>Smart Deals: My Bids</title>
            <h3 className="text-xl md:text-2xl lg:text-4xl text-center font-bold mb-6">My Bids: <span className="text-gradient">
                {
                    myBids.length < 10
                        ?
                        `0${myBids.length}`
                        :
                        myBids.length}
            </span></h3>
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
                                        <th className="py-4 px-6 text-left">Actions</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                                    {myBids.map((bid, index) => (
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
                                                bid.status !== "accept" &&
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center gap-2">
                                                        <button onClick={() => handleRemoveBid(bid._id)}
                                                            disabled={isPending}
                                                            className="btn btn-xs sm:btn-sm btn-outline border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 font-medium rounded-md capitalize px-3">
                                                            Remove Bid
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

export default MyBids;