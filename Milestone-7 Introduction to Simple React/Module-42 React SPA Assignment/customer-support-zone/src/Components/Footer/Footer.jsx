import { FaEnvelope, FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 p-10 font-sans mt-20">
            {/* Top Section: Main Columns */}
            <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-10 border-b border-gray-800">

                {/* Brand Column */}
                <div className="lg:col-span-2 flex flex-col space-y-3 items-center md:items-start">
                    <h2 className="text-xl font-bold text-white tracking-wide">
                        CS — Ticket System
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Company Column */}
                <div className="flex flex-col space-y-2 items-center md:items-start">
                    <span className="footer-title text-white opacity-100 font-semibold mb-2 text-base">
                        Company
                    </span>
                    <a href="#about" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        About Us
                    </a>
                    <a href="#mission" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        Our Mission
                    </a>
                    <a href="#contact" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        Contact Sales
                    </a>
                </div>

                {/* Services Column */}
                <div className="flex flex-col space-y-2 items-center md:items-start">
                    <span className="footer-title text-white opacity-100 font-semibold mb-2 text-base">
                        Services
                    </span>
                    <a href="#products" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        Products & Services
                    </a>
                    <a href="#stories" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        Customer Stories
                    </a>
                    <a href="#apps" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        Download Apps
                    </a>
                </div>

                {/* Information Column */}
                <div className="flex flex-col space-y-2 items-center md:items-start">
                    <span className="footer-title text-white opacity-100 font-semibold mb-2 text-base">
                        Information
                    </span>
                    <a href="#privacy" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#terms" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        Terms & Conditions
                    </a>
                    <a href="#join" className="link link-hover text-sm text-gray-400 hover:text-white transition-colors">
                        Join Us
                    </a>
                </div>

                {/* Social Links Column */}
                <div className="flex flex-col space-y-3 items-center md:items-start">
                    <span className="footer-title text-white opacity-100 font-semibold mb-2 text-base">
                        Social Links
                    </span>
                    <a href="#twitter" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <FaXTwitter className="w-4 h-4" />
                        <span>@CS — Ticket System</span>
                    </a>
                    <a href="#linkedin" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <FaLinkedin className="w-4 h-4" />
                        <span>@CS — Ticket System</span>
                    </a>
                    <a href="#facebook" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <FaFacebook className="w-4 h-4" />
                        <span>@CS — Ticket System</span>
                    </a>
                    <a href="mailto:support@cst.com" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <FaEnvelope className="w-4 h-4" />
                        <span>support@cst.com</span>
                    </a>
                </div>

            </div>

            {/* Bottom Section: Copyright */}
            <div className="pt-8 text-center text-xs text-gray-400">
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;