import { useQuery } from '@tanstack/react-query';
import { use, useRef, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router';
import api from '../../api/axios';
import Modal from '../../components/Modal/Modal';
import ProductBidsTable from '../../components/ProductBidsTable/ProductBidsTable';
import ProductDetailsSkeleton from '../../components/Skeleton/ProductDetailsSkeleton/ProductDetailsSkeleton';
import { AuthContext } from './../../contexts/AuthContext/AuthContext';

const ProductDetails = () => {
    const { id } = useParams();



    //single product data
    const { data: product = {}, isLoading, isError, error } = useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const response = await api.get(`/products/${id}`);
            return response.data;
        },
        staleTime: Infinity,
        gcTime: Infinity,
        enabled: !!id
    });

    const {
        _id, title, price_min, price_max, seller_email, category, created_at, product_image, status, location, seller_image, seller_name, condition, usage, description, seller_contact
    } = product;


    const formattedDate = new Date(created_at).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
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

    const { user } = use(AuthContext);

    const isMyProduct = user?.email === seller_email;

    const [isBided, setIsBided] = useState(false);

    const bidModalRef = useRef(null);

    const handleBidModalOpen = () => {
        bidModalRef.current.showModal();
    }

    const closeBidModal = () => {
        bidModalRef.current?.close();
    };



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
                <ProductDetailsSkeleton></ProductDetailsSkeleton>
            }
            <div className="max-w-300 mx-auto px-2 my-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    <div className="md:col-span-5 flex flex-col gap-6">

                        <div className="w-full aspect-4/3 sm:aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <img
                                src={product_image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
                            <h2 className="text-xl font-bold text-slate-900">Product Description</h2>

                            <div className="flex justify-between items-center text-sm py-2 border-b-2 border-slate-200">
                                <p>
                                    <span className="text-purple-600 font-semibold">Condition :</span>{' '}
                                    <span className="font-bold text-slate-800 capitalize">{condition}</span>
                                </p>
                                <p>
                                    <span className="text-purple-600 font-semibold">Usage Time :</span>{' '}
                                    <span className="font-bold text-slate-800 capitalize">{usage}</span>
                                </p>
                            </div>

                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-7 flex flex-col gap-5">

                        <Link to="/allProducts" className="flex items-center gap-2 text-slate-700 hover:text-purple-600 transition-colors font-medium text-sm w-fit cursor-pointer">
                            <FiArrowLeft className="w-4 h-4" />
                            <span>Back To Products</span>
                        </Link>

                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                            {title}
                        </h1>

                        <div>
                            <span className="badge badge-sm bg-purple-100 text-purple-600 border-none font-medium px-3 py-2 text-xs rounded-md capitalize">
                                {categoryLabels[category]}
                            </span>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 flex flex-col gap-1">
                            <span className="text-2xl sm:text-3xl font-bold text-emerald-500">
                                ${price_min} - {price_max}
                            </span>
                            <span className="text-xs text-slate-500">
                                Price starts from
                            </span>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 flex flex-col gap-3">
                            <h2 className="text-lg font-bold text-slate-900">Product Details</h2>
                            <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                                <p>
                                    <span className="font-bold text-slate-900">Product ID:</span>{' '}
                                    <span className="text-slate-600">{_id}</span>
                                </p>
                                <p>
                                    <span className="font-bold text-slate-900">Posted:</span>{' '}
                                    <span className="text-slate-600">{formattedDate}</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 flex flex-col gap-4">
                            <h2 className="text-lg font-bold text-slate-900">Seller Information</h2>

                            <div className="flex items-center gap-3">
                                <div className="avatar placeholder">
                                    <div className="bg-slate-300 text-slate-600 rounded-full w-12 h-12 flex items-center justify-center font-semibold text-lg">
                                        <img src={seller_image} alt={seller_name} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm sm:text-base capitalize">{seller_name}</h3>
                                    <p className="text-xs text-slate-500">{seller_email}</p>
                                </div>
                            </div>

                            <div className="space-y-2 text-xs sm:text-sm">
                                <p>
                                    <span className="font-bold text-slate-900">Location:</span>{' '}
                                    <span className="text-slate-600">{location}</span>
                                </p>
                                <p>
                                    <span className="font-bold text-slate-900">Contact:</span>{' '}
                                    <span className="text-slate-600">{seller_contact}</span>
                                </p>
                                <div className="flex items-center gap-2 pt-1">
                                    <span className="font-bold text-slate-900">Status:</span>
                                    <span className={`badge text-slate-900 border-none text-xs px-3 py-1 capitalize font-semibold ${status === "sold" ? "bg-red-400" : "bg-amber-400"}`}>
                                        {status === "pending" ? "On Sale" : `${status}`}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleBidModalOpen} disabled={isMyProduct || isBided || status === "sold"} className="btn border-none bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold rounded-md h-12 text-base w-full shadow-md shadow-purple-200 disabled:bg-none disabled:bg-stone-600 disabled:text-stone-200 disabled:shadow-none disabled:pointer-events-auto disabled:cursor-not-allowed">
                            I Want Buy This Product
                        </button>
                        <Modal bidModalRef={bidModalRef} user={user} _id={_id} onBidSuccess={closeBidModal}></Modal>
                    </div>
                </div>
            </div>
            <ProductBidsTable isMyProduct={isMyProduct} productId={id} setIsBided={setIsBided} user={user}></ProductBidsTable>
        </div>
    );
};

export default ProductDetails;