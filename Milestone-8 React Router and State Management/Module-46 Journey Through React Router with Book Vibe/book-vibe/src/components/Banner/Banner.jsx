import bannerImage from "../../assets/banner.png";

const Banner = () => {
    return (
        <div className="bg-[rgba(19,19,19,0.05)] py-8 px-12 md:py-14 md:px-18 lg:py-20 lg:px-28 rounded-3xl my-12 flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl font-bold leading-20">Books to freshen up your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-white mt-10">View The List</button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;