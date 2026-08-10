import { RiTwitterXLine } from "react-icons/ri";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className="bg-[#001931]">
            <div className="max-w-300 mx-auto py-7 px-2 lg:px-0">
                <div className="flex justify-between gap-4 items-start border-b border-[#E5E7EB]/9">
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10" src={footerLogo} alt="" />
                        <h3 className="font-bold text-white">HERO.IO</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h3 className="text-xl font-medium text-white">Social Links</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl">
                            <div className="bg-white p-1 rounded-full">
                                <RiTwitterXLine />
                            </div>
                            <div className="bg-white p-1 rounded-full">
                                <TiSocialLinkedin />
                            </div>
                            <div className="bg-white p-1 rounded-full">
                                <TiSocialFacebook />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-7 text-white text-center">
                    <h3>Copyright © 2026 - All right reserved</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;