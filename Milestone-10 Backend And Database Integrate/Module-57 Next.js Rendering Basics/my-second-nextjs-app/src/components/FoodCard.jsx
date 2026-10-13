import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {

    const {id, dish_name, image_link, category, price } = food;

    return (
        <div className="card bg-base-100 shadow-sm flex-1 h-full">
            <figure className="h-72 overflow-hidden">
                <Image
                    src={image_link}
                    width={300}
                    height={200}
                    alt={dish_name}
                    loading="eager"
                    className="object-cover w-auto h-auto"
                ></Image>
            </figure>
            <div className="card-body flex flex-col flex-1">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary capitalize">{category}</div>
                </h2>
                <p>Price: {price}</p>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end mt-auto">
                    <button className="btn btn-primary">Add to Cart</button>
                    <Link href={`/foods/${id}`} className="btn btn-ghost">Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;