import Product from "@/components/Product/Product";

const getProducts = async () => {
    // const res = await fetch("http://localhost:3004/products", { cache: "no-store" });
    const res = await fetch("http://localhost:3004/products", { next: { revalidate: 20 } });
    return res.json();
}

const ProductsPage = async () => {

    const products = await getProducts();

    return (
        <div className="px-2">
            <h2 className="py-2">Total Products: {products.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;