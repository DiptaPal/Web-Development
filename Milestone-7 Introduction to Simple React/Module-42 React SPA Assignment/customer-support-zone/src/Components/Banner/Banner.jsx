import patternImg from "../../assets/vector1.png";
import TicketInfo from "../TicketInfo/TicketInfo";

const Banner = ({ countInProgress, resolveTickets }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-20">
            <TicketInfo
                title="In-Progress"
                count={countInProgress}
                gradient="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]"
                patternImg={patternImg}
            ></TicketInfo>
            <TicketInfo
                title="Resolved"
                count={resolveTickets.length}
                gradient="bg-[linear-gradient(90deg,#54CF68_9.6%,#00827A_92.23%)]"
                patternImg={patternImg}
            ></TicketInfo>
        </div>
    );
};

export default Banner;