import { memo } from "react";
import calenderLogo from "../../assets/calender.png";

const Ticket = memo(({ ticket, handleProgress }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;

    const statusCheck = status === "Open" ? true : false;
    const priorityCheck = priority.split(" ")[0].toLowerCase();

    return (
        <div className="mt-4">
            <button disabled={status !== "Open"} onClick={() => handleProgress(ticket)} className={`p-4 shadow rounded flex flex-col h-full cursor-pointer ${status !== "Open" && "bg-gray-200"}`}>

                {/* Top */}
                <div className="flex justify-between items-start flex-1">
                    <h3 className="text-[#001931] text-left font-medium max-w-[60%]">{title}</h3>
                    <div
                        className={`flex justify-center items-center gap-1 px-2 py-1 rounded-2xl max-w-[40%] ${statusCheck === true
                            ? "bg-[#B9F8CF]"
                            : "bg-[#F8F3B9]"}`
                        }>

                        <div className={`w-4 h-4 rounded-full ${statusCheck === true
                            ? "bg-[#02A53B]"
                            : "bg-[#FEBB0C]"}`
                        }></div>

                        <span className={`font-medium text-sm ${statusCheck === true
                            ? "text-[#0B5E06]"
                            : "text-[#9C7700]"}`
                        }>
                            {status}
                        </span>
                    </div>
                </div>

                {/* middle */}
                <p className="pt-1 pb-3 text-[#627382] flex-1 text-justify">{description}</p>

                {/* Bottom */}
                <div className="flex justify-between items-center gap-1 flex-1">
                    <div className="flex items-center gap-3 lg:gap-2 xl:gap-3">
                        <h6 className="text-[#627382] text-xs font-medium">#{id}</h6>
                        <h6 className={`text-xs font-medium ${priorityCheck === "high"
                            ? "text-[#F83044]"
                            : priorityCheck === "low"
                                ? "text-[#02A53B]"
                                : "text-[#FEBB0C]"}`}
                        >
                            {priority}
                        </h6>
                    </div>
                    <div className="flex items-center gap-3 lg:gap-2 xl:gap-3">
                        <h6 className="text-[#627382] text-xs">{customer}</h6>
                        <h6 className="text-[#627382] text-xs flex items-center gap-1">
                            <img className="w-5 h-5" src={calenderLogo} alt="" />
                            <span>{createdAt}</span>
                        </h6>
                    </div>
                </div>

            </button>
        </div >
    );
});

export default Ticket;