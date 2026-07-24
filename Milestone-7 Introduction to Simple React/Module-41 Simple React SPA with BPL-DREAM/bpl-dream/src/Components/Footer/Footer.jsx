import logo from "../../assets/logo-footer.png";

const Footer = () => {
    return (
        <footer className="relative bg-[#06091D] mt-80">
            {/* Newsletter Section */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-6xl">
                <div className="rounded-3xl border border-white bg-white/30 p-3 shadow-xl">
                    <div
                        className="rounded-3xl py-16 px-6 text-center bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "linear-gradient(135deg,#dff4ff,#ffffff,#fff7dc,#ffffff)",
                        }}
                    >
                        <h2 className="text-4xl font-bold">
                            Subscribe to our Newsletter
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Get the latest updates and news right in your inbox!
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="max-w-80 rounded-lg border border-gray-300 px-5 py-3 outline-none focus:border-yellow-400"
                            />

                            <button className="rounded-lg bg-linear-to-r from-yellow-300 to-pink-400 px-8 py-3 font-semibold shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="mx-auto px-6 pt-56 pb-8 text-gray-300 max-w-6xl">
                <img
                    src={logo}
                    alt=""
                    className="mx-auto mb-20 mt-30 sm:mt-0 w-24"
                />
                <div className="grid gap-10 md:grid-cols-3">
                    {/* About */}
                    <div>
                        <h3 className="mb-5 text-xl font-bold text-white">
                            About Us
                        </h3>

                        <p className="text-sm leading-7 text-gray-400">
                            We are a passionate team dedicated to providing the best services for our customers.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-400 list-disc ml-6">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="mb-5 text-xl font-bold text-white">
                            Subscribe
                        </h3>

                        <p className="mb-5 text-sm text-gray-400">
                            Subscribe to our newsletter for the latest updates.
                        </p>

                        <div className="flex overflow-hidden rounded-lg">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 text-black outline-none bg-white"
                            />

                            <button className="bg-linear-to-r from-yellow-300 to-pink-400 px-6 font-semibold text-black">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="my-10 border-gray-700" />

                <p className="text-center text-sm text-gray-500">
                    @2024 Your Company All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;