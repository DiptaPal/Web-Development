import { Link } from 'react-router';
import leftImage from "../../assets/bg-hero-left.png";
import rightImage from "../../assets/bg-hero-right.png";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
    return (
        <div className="bg-[linear-gradient(127deg,#FFE6FD_5.68%,#E0F8F5_92.19%)] relative text-center">
            <img
                src={leftImage}
                alt=""
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    hidden
                    md:block
                    w-24
                    lg:w-40
                    xl:w-52
                    2xl:w-64
                    max-w-[20%]
                    h-auto
                "
            />
            <div className="py-4 sm:py-6 md:py-8 lg:py-14">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold">Deal your <span className="text-gradient">Products</span> <br /> in a <span className="text-gradient">Smart</span> way !</h1>
                <p className="text-[#627382] mt-4 text-xs md:text-lg lg:text-base">SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>

                <div className="flex flex-col justify-center items-center my-8">
                    <SearchBar></SearchBar>
                </div>

                <div className="flex flex-col justify-center md:flex-row items-center gap-4">
                    <Link to="/allProducts" className="btn border-0 rounded-md px-3 md:px-5 py-2 font-medium text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]">Watch All Products</Link>
                    <Link to="/createProduct" className="btn border border-[#632EE3] rounded-md px-3 md:px-5 py-2 bg-transparent">
                        <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-medium">Post an Product</span>
                    </Link>
                </div>
            </div>
            <img
                src={rightImage}
                alt=""
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    hidden
                    md:block
                    w-24
                    lg:w-40
                    xl:w-52
                    2xl:w-64
                    max-w-[20%]
                    h-auto
                "
            />
        </div>
    );
};

export default Hero;