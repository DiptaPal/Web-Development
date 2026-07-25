
const TicketInfo = ({ title, count, gradient, patternImg }) => {
    return (
        <div className={`relative text-center rounded-lg p-10 ${gradient}`}>

            {/* Left Pattern */}
            <img
                src={patternImg}
                alt="pattern"
                className="absolute left-0 top-0 h-full w-[45%] object-cover opacity-70"
            />

            {/* Right Pattern */}
            <img
                src={patternImg}
                alt=""
                className="absolute right-0 top-0 h-full w-[45%] object-cover opacity-70 scale-x-[-1]"
            />

            {/* Content */}
            <div className="relative z-10 text-center">
                <h3 className="text-2xl text-white">{title}</h3>
                <h2 className="text-6xl font-semibold text-white">{count}</h2>
            </div>
        </div>
    );
};

export default TicketInfo;