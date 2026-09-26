import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router';
import api from "../../api/axios";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../Skeleton/ProductCardSkeleton/ProductCardSkeleton";


const RecentProducts = () => {


    const { data: latestProducts = [], isLoading, isError, error } = useQuery({
        queryKey: ["latest-products"],
        queryFn: async () => {
            const response = await api.get("/latest-products");
            return response.data;
        },
        staleTime: Infinity,
        gcTime: Infinity
    });


    return (
        <div className="py-6 md:py-10 lg:py-14 bg-[#F5F5F5]">
            <div className="max-w-300 mx-auto p-2">
                <h3 className="text-xl md:text-2xl lg:text-4xl text-center font-bold mb-6">Recent <span className="text-gradient">Products</span></h3>
                <div>
                    {
                        isError
                        &&
                        <p className="text-center mt-5 text-red-500">
                            {error.message}
                        </p>
                    }
                    {
                        isLoading
                        &&
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                Array.from({ length: 6 }).map((_, index) => (
                                    <ProductCardSkeleton key={index} />
                                ))
                            }
                        </div>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            latestProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                        }
                    </div>
                </div>
                <div className="flex justify-center items-center mt-8">
                    <Link to="allProducts" className="btn border-0 rounded-md px-3 md:px-5 py-2 font-medium text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]">Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default RecentProducts;