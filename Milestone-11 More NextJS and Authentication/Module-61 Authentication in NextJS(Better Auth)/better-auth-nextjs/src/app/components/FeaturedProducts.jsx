import Image from "next/image";

import {
    Button,
    Card,
    CardFooter,
    Chip,
} from "@heroui/react";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        oldPrice: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 129.99,
        oldPrice: 159.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 59.99,
        oldPrice: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
        id: 4,
        name: "Camera",
        price: 249.99,
        oldPrice: 299.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Featured Products
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Our most popular products.
                        </p>
                    </div>

                    <Button color="primary" variant="light">
                        View All
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {products.map((product) => (
                        <Card key={product.id} shadow="sm">
                            <div className="p-0 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-4">
                                    <Chip color="success" size="sm">
                                        Sale
                                    </Chip>

                                    <h3 className="font-semibold mt-3">
                                        {product.name}
                                    </h3>

                                    <div className="flex gap-2 mt-2 items-center">
                                        <span className="font-bold text-primary">
                                            £{product.price}
                                        </span>

                                        <span className="text-gray-400 line-through text-sm">
                                            £{product.oldPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <CardFooter>
                                <Button color="primary" fullWidth>
                                    Add to Cart
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
}