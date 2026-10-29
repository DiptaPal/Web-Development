"use client"
import PieChartWithPaddingAngle from "@/components/PieChartWithPaddingAngle";
import useContacts from "../hooks/useContacts";


const StatsPage = () => {
    const { contacts } = useContacts();
    const totalCalls = contacts.filter(contact => contact.type === "call");
    const totalTexts = contacts.filter(contact => contact.type === "text");
    const totalVideos = contacts.filter(contact => contact.type === "video");
    const pieData = [
        { name: "Text", value: totalTexts.length },
        { name: "Call", value: totalCalls.length },
        { name: "Video", value: totalVideos.length }
    ]
    return (
        <div className="max-w-277.5 mx-auto py-10 px-8">
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-5xl text-[#1F2937] font-bold">Friendship Analytics</h1>
            <div className="mt-4 p-6 bg-white shadow rounded-md">
                <h3 className="mb-4 text-xl font-medium text-[#244D3F]">By Interaction Type</h3>

                <div className="w-full">
                    <PieChartWithPaddingAngle pieData={pieData} />
                </div>
            </div>
        </div>
    );
};

export default StatsPage;