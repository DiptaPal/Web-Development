
import { useQuery } from '@tanstack/react-query';
import api from '../../api/axios';
import ProductCard from './../../components/ProductCard/ProductCard';
import ProductCardSkeleton from '../../components/Skeleton/ProductCardSkeleton/ProductCardSkeleton';
const AllProducts = () => {

    const { data: products = [], isLoading, isError, error } = useQuery({
        queryKey: ["all-products"],
        queryFn: async () => {
            const response = await api.get("all-products");
            return response.data;
        },
        staleTime: Infinity,
        gcTime: Infinity
    })

    return (
        <div className="py-6 md:py-10 lg:py-14 bg-[#F5F5F5]">
            <title>Smart Deals: All Products</title>
            <div className="max-w-300 mx-auto px-2">
                <h3 className="text-xl md:text-2xl lg:text-4xl text-center font-bold mb-6">All <span className="text-gradient">Products</span></h3>
                <div>
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
                                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;