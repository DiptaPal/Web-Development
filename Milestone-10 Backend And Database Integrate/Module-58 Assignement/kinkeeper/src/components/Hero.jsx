import { FaPlus } from "react-icons/fa6";

const Hero = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
                <p className="text-[#64748B] mt-4">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br className="hidden md:block" /> relationships that matter most.</p>
            </div>
            <div className="flex justify-center items-center mt-8">
                <button className="bg-[#244D3F] py-3 px-4 font-semibold text-white rounded-[4px] flex justify-center items-center gap-1 cursor-pointer md:text-sm text-base"><FaPlus size={16} /> Add a Friend</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-6">
                <div className="text-center p-6 bg-[#FFF] rounded-lg shadow">
                    <h3 className="text-lg md:text-2xl lg:text-4xl text-[#244D3F] font-semibold">10</h3>
                    <p className="text-base md:text-lg text-[#64748B] mt-2">Total Friends</p>
                </div>
                <div className="text-center p-6 bg-[#FFF] rounded-lg shadow">
                    <h3 className="text-lg md:text-2xl lg:text-4xl text-[#244D3F] font-semibold">3</h3>
                    <p className="text-base md:text-lg text-[#64748B] mt-2">On Track</p>
                </div>
                <div className="text-center p-6 bg-[#FFF] rounded-lg shadow">
                    <h3 className="text-lg md:text-2xl lg:text-4xl text-[#244D3F] font-semibold">6</h3>
                    <p className="text-base md:text-lg text-[#64748B] mt-2">Need Attention</p>
                </div>
                <div className="text-center p-6 bg-[#FFF] rounded-lg shadow">
                    <h3 className="text-lg md:text-2xl lg:text-4xl text-[#244D3F] font-semibold">12</h3>
                    <p className="text-base md:text-lg text-[#64748B] mt-2">Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;