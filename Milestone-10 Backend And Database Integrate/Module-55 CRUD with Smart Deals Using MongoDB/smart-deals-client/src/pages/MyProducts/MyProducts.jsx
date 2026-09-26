import { useQuery } from '@tanstack/react-query';
import { use } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import api from '../../api/axios';
import { useDeleteProduct } from '../../hooks/useDeleteProduct';
import { useUpdateProductStatus } from '../../hooks/useUpdateProductStatus';
import BidsSkeleton from './../../components/Skeleton/BidsSkeleton/BidsSkeleton';
import { AuthContext } from './../../contexts/AuthContext/AuthContext';

const MyProducts = () => {

    const { user } = use(AuthContext);

    // product collection base on user
    const { data: myProducts = [], isLoading, isError, error } = useQuery({
        queryKey: ["my-products", user?.email],
        queryFn: async () => {
            const response = await api.get("/my-products", {
                params: {
                    email: user?.email
                }
            });
            return response.data;
        },
        enabled: !!user?.email,
        staleTime: Infinity,
        gcTime: Infinity
    });

    const categoryLabels = {
        electronics: "Electronics",
        fashion: "Fashion",
        "home-living": "Home & Living",
        "beauty-personal-care": "Beauty & Personal Care",
        "sports-fitness": "Sports & Fitness",
        "books-education": "Books & Education",
        "toys-games": "Toys & Games",
        grocery: "Grocery",
        automotive: "Automotive",
        "pet-supplies": "Pet Supplies",
    };

    const { mutate, isPending } = useDeleteProduct();

    const handleDelete = (productId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to undo this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
            customClass: {
                confirmButton: "bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer",
                cancelButton: "bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg ml-2 cursor-pointer",
            },
            buttonsStyling: false,
        }).then((result) => {
            if (result.isConfirmed) {
                mutate(productId);

                Swal.fire({
                    title: "Deleted!",
                    text: "Product deleted successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#16a34a",
                });
            }
        });
    }

    const { mutate: updateStatusMutate, isPending: statusPending } = useUpdateProductStatus();

    const handleUpdateProductStatus = (data) => {
        updateStatusMutate(data);
        toast.success("Product Status Updated!");
    }

    return (
        <div className="py-12 bg-[#F8F9FA]">
            <title>Smart Deals: My Products</title>
            <h3 className="text-xl md:text-2xl lg:text-4xl text-center font-bold mb-6">My Products: <span className="text-gradient">
                {
                    myProducts.length < 10
                        ?
                        `0${myProducts.length}`
                        :
                        myProducts.length}
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
                                        <th className="py-4 px-6 text-left">Image</th>
                                        <th className="py-4 px-6 text-left">Product Name</th>
                                        <th className="py-4 px-6 text-center">Category</th>
                                        <th className="py-4 px-6 text-center">Price</th>
                                        <th className="py-4 px-6 text-center">Status</th>
                                        <th className="py-4 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                                    {myProducts.map((product, index) => (
                                        <tr key={product._id} className="hover:bg-slate-50/50 transition-colors">


                                            <td className="py-4 px-6 font-semibold text-slate-800">
                                                {index + 1}
                                            </td>


                                            <td className="py-4 px-6">
                                                <div className="w-12 h-10 bg-slate-200 rounded-lg overflow-hidden shrink-0">
                                                    <img
                                                        src={product.product_image}
                                                        alt={product.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </td>


                                            <td className="py-4 px-6">
                                                <Link to={`/productDetails/${product._id}`} className="font-medium text-slate-900 leading-snug">
                                                    {product.title}
                                                </Link>
                                            </td>


                                            <td className="py-4 px-6 font-medium text-slate-900 text-center ">
                                                {categoryLabels[product.category]}
                                            </td>

                                            <td className="py-4 px-3 font-medium text-slate-900 text-center">
                                                $ {product.price_min} - {product.price_max}
                                            </td>

                                            <td className={`py-4 px-6 font-medium capitalize text-center ${product.status === "pending" && "text-yellow-400"} ${product.status === "sold" && "text-emerald-500"}`}>
                                                {product.status}
                                            </td>

                                            <td className="py-4 px-6">
                                                <div className="flex items-center justify-center gap-2">
                                                    <Link
                                                        to={`/editProduct/${product._id}`}
                                                        className="btn btn-xs sm:btn-sm btn-outline border-violet-300 text-violet-500 hover:bg-violet-50 hover:border-violet-400 font-medium rounded-sm capitalize px-3">
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(product._id)}
                                                        disabled={isPending}
                                                        className="btn btn-xs sm:btn-sm btn-outline border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 font-medium rounded-sm capitalize px-3">
                                                        Delete
                                                    </button>
                                                    <button
                                                        onClick={() => handleUpdateProductStatus({
                                                            productId: product._id,
                                                            status: product.status === "pending" ? "sold" : "pending"
                                                        })}
                                                        disabled={statusPending}
                                                        className="btn btn-xs sm:btn-sm btn-outline border-emerald-400 text-emerald-500 hover:bg-emerald-50 hover:border-emerald-500 font-medium rounded-sm capitalize px-3">
                                                        {
                                                            product.status === "pending" ? "Mark Sold" : "Mark Unsold"
                                                        }
                                                    </button>
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
        </div >
    );
};

export default MyProducts;