
import { Link } from 'react-router';
const ProductCard = ({ product }) => {
    const { title, product_image, usage, price_max, price_min } = product;
    return (
        <div className="p-4 rounded-lg bg-white shadow flex flex-col">

            <img src={product_image} alt="product-image" className="rounded-lg w-full h-60 object-cover" />

            <div className="flex-1 mt-2">
                <h3 className="font-medium text-xl">{title} {usage && `[${usage}]`}</h3>
            </div>
            <div className="my-2">
                <p className="text-lg font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">${price_min} - {price_max}</p>
            </div>

            <Link to={`/productDetails/${product._id}`} className="btn border-[1.5px] border-[#632EE3] rounded-md px-3 md:px-5 py-2 bg-transparent w-full">
                <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-semibold">View Details</span>
            </Link>
        </div>
    );
};

export default ProductCard;