
const TaskStatus = ({ ticket, handleResolve }) => {
    return (
        <div className="shadow p-4 rounded flex flex-col justify-between gap-4 text-left">
            <h3 className="text-[#001931] font-medium text-sm">{ticket.title}</h3>
            <button onClick={() => handleResolve(ticket)} className="bg-[#02A53B] rounded py-2 px-3 text-white font-semibold w-full text-base cursor-pointer">Complete</button>
        </div>
    );
};

export default TaskStatus;