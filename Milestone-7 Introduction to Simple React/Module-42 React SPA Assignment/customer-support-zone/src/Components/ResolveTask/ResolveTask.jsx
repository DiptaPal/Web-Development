import { FaCheck } from "react-icons/fa6";

const ResolveTask = ({ ticket, handleRemove }) => {
    return (
        <div className="text-sm text-[#001931] font-medium py-3 px-4 rounded bg-[#E0E7FF] shadow">
            <h3>{ticket.title}</h3>
            <div className="flex justify-between items-center mt-2">
                <div className="text-xs text-[#02A53B] flex items-center gap-1">
                    <FaCheck />
                    <h4>Completed</h4>
                </div>
                <button onClick={() => handleRemove(ticket)} className="text-xs text-gray-500 cursor-pointer">Click to Remove</button>
            </div>
        </div>
    );
};

export default ResolveTask;