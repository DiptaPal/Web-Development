import { Card } from "@heroui/react";
import Image from "next/image";

const categories = [
    {
        name: "Electronics",
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661",
    },
    {
        name: "Fashion",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
    },
    {
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
        name: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
];

export default function Categories() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-10">
                <h2 className="text-3xl font-bold">
                    Shop by Category
                </h2>

                <p className="text-gray-500 mt-2">
                    Find your favourite products.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {categories.map((category) => (
                    <Card
                        key={category.name}
                        className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    >
                        <Image
                            src={category.image}
                            alt={category.name}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">
                            <h3 className="font-semibold text-lg">
                                {category.name}
                            </h3>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}