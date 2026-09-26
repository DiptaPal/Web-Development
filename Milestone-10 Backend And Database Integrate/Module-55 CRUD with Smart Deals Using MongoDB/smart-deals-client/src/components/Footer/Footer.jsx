import {
    FaEnvelope,
    FaFacebookF,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#031527] text-slate-300 py-12 px-6 lg:px-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

                {/* Brand Section */}
                <div className="lg:col-span-1 space-y-3">
                    <h2 className="text-2xl font-bold text-white">
                        Smart
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage: 'linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)'
                            }}
                        >
                            Deals
                        </span>
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        Your trusted marketplace for authentic local products. Discover the best deals from across Bangladesh.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/allProducts" className="hover:text-white transition-colors">All Products</Link></li>
                        <li><Link to="/myProducts" className="hover:text-white transition-colors">My Product</Link></li>
                        <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
                        <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white mb-2">Categories</h3>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Fashion</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Home & Living</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Groceries</a></li>
                    </ul>
                </div>

                {/* Contact & Support */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white mb-2">Contact & Support</h3>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-slate-400 shrink-0" />
                            <a href="mailto:support@Smartdeals.com" className="hover:text-white transition-colors">
                                support@Smartdeals.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt className="text-slate-400 shrink-0" />
                            <a href="tel:+880123456789" className="hover:text-white transition-colors">
                                +880 123 456 789
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-slate-400 mt-1 shrink-0" />
                            <span>123 Commerce Street, Dhaka, Bangladesh</span>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white mb-2">Social Links</h3>
                    <div className="flex items-center gap-3">
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                            <FaXTwitter size={16} />
                        </a>
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                            <FaLinkedinIn size={16} />
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                            <FaFacebookF size={16} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright Divider */}
            <div className="border-t border-slate-800/80 pt-6 text-center text-sm text-slate-400">
                © 2026 SmartDeals. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;