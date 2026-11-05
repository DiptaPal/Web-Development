import { Button } from "@heroui/react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-20
                      grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <p className="text-primary font-semibold mb-4">
                        NEW COLLECTION 2026
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold
                         leading-tight text-gray-900">
                        Discover Your
                        <span className="text-primary"> Perfect Style.</span>
                    </h1>

                    <p className="text-gray-600 mt-6 text-lg">
                        Explore our latest collection of products.
                        Find quality products at amazing prices.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Button color="primary" size="lg">
                            Shop Now
                        </Button>

                        <Button variant="bordered" size="lg">
                            Explore
                        </Button>
                    </div>
                </div>

                <div>
                    <Image
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                        alt="Modern shopping collection"
                        width={1200}
                        height={800}
                        className="w-full h-100 object-cover rounded-2xl"
                    />
                </div>

            </div>
        </section>
    );
}