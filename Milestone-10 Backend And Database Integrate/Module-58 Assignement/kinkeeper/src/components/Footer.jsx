import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#1b3b2b] text-neutral-content flex flex-col justify-between">

            <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold tracking-tight text-white">
                    KinKeeper
                </span>
                <p className="text-sm text-gray-300 max-w-md text-center">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </div>


            <div className="flex flex-col items-center space-y-3 my-4">
                <span className="text-sm font-medium text-gray-300">Social Links</span>
                <div className="flex space-x-3">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle bg-white text-black hover:bg-gray-200 border-none"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="text-lg" />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle bg-white text-black hover:bg-gray-200 border-none"
                        aria-label="Facebook"
                    >
                        <FaFacebookF className="text-lg" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle bg-white text-black hover:bg-gray-200 border-none"
                        aria-label="Twitter"
                    >
                        <FaTwitter className="text-lg" />
                    </a>
                </div>
            </div>

            <div className="w-full border-t border-[#2d523f] my-2"></div>

            <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 px-4">
                <p>© 2026 KinKeeper. All rights reserved.</p>
                <div className="flex space-x-6 mt-3 sm:mt-0">
                    <Link href="/" className="link link-hover hover:text-white">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="link link-hover hover:text-white">
                        Terms of Service
                    </Link>
                    <Link href="/" className="link link-hover hover:text-white">
                        Cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;