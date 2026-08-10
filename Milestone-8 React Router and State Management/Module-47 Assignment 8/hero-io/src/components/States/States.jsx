
const States = () => {
    return (
        <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-5 md:py-10 lg:py-20 text-white text-center">
            <div className="max-w-300 mx-auto px-2 lg:px-0">
                <h2 className="text-2xl md:text-5xl font-bold">Trusted by Millions, Built for You</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6  mt-5 md:mt-10">
                    <div className="flex flex-col gap-4">
                        <p>Total Downloads</p>
                        <h1 className="text-3xl md:text-6xl font-bold">29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p>Total Reviews</p>
                        <h1 className="text-3xl md:text-6xl font-bold">906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p>Active Apps</p>
                        <h1 className="text-3xl md:text-6xl font-bold">132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;