import { Link } from 'react-router';
import appStore from "../../assets/appstore.png";
import bannerImage from "../../assets/hero.png";
import playStore from "../../assets/playstore.png";


const Banner = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <div className="pt-5 md:pt-10 lg:pt-15 pb-5 md:pb-10 px-2 lg:px-0">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-2xl md:text-5xl lg:text-7xl text-center font-bold">We Build <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">Productive</span> Apps</h1>
                </div>
                <div className="text-center text-base md:text-xl text-[#627382] mt-4 mb-5 md:mb-10 max-w-240 mx-auto">
                    <p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <Link to="https://play.google.com/store/games?hl=en" className="flex items-center gap-2 text-base md:text-xl font-semibold py-3 px-3 md:px-6 border border-[#D2D2D2] rounded-sm">
                        <img className="w-5 h-5 md:w-8 md:h-8" src={playStore} alt="" />
                        <span>Google Play</span>
                    </Link>
                    <Link to="https://apps.apple.com/gb/iphone/search" className="flex items-center gap-2 text-base md:text-xl font-semibold py-3 px-3 md:px-6 border border-[#D2D2D2] rounded-sm">
                        <img className="w-5 h-5 md:w-8 md:h-8" src={appStore} alt="" />
                        <span>App Play</span>
                    </Link>
                </div>
            </div>
            <div className="max-w-180 mx-auto px-2 md:px-0">
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;