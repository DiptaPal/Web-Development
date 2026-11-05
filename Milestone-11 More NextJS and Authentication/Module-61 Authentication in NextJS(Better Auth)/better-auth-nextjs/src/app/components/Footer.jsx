export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-2xl font-bold">ShopEase.</h2>
                        <p className="text-gray-400 mt-4">
                            Discover quality products at amazing prices.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Home</li>
                            <li>Products</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400">
                            Email: support@shopease.com
                        </p>
                        <p className="text-gray-400 mt-2">
                            United Kingdom
                        </p>
                    </div>

                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2026 ShopEase. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}