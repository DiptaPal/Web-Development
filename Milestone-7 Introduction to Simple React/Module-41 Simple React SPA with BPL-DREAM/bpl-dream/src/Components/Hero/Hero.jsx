import bannerImg from "../../assets/banner-main.png";
import bannerBg from "../../assets/bg-shadow.png";
const Hero = () => {
    return (
        <div
            className="hero min-h-[480px] rounded-lg"
            style={{
                backgroundImage: `url(${bannerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="hero-overlay rounded-lg bg-black opacity-65"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-full">
                    <div className="flex justify-center items-center">
                        <img className="w-40 md:w-60 mb-5" src={bannerImg} alt="" />
                    </div>
                    <h1 className="mb-5 text-xl md:text-3xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="mb-5 text-sm md:text-base">
                        Beyond Boundaries Beyond Limits
                    </p>
                    <div className="border border-[#E7FE29] inline-block rounded-md p-2">
                        <button className="btn text-black bg-[#E7FE29]">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;