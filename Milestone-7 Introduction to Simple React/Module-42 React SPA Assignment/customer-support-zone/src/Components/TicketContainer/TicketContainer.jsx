import { use, useCallback, useEffect, useMemo, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import ResolveTask from '../ResolveTask/ResolveTask';
import TaskStatus from '../TaskStatus/TaskStatus';
import Ticket from '../Ticket/Ticket';

const TicketContainer = ({ fetchTickets, countInProgress, setCountInProgress, resolveTickets, setResolveTickets }) => {

    const ticketData = use(fetchTickets);
    const [tickets, setTickets] = useState(ticketData);


    const progressTickets = useMemo(() => {
        return tickets.filter(ticket => ticket.status !== "Open");
    }, [tickets])


    const handleProgress = useCallback((ticket) => {
        setTickets(prev =>
            prev.map(item =>
                item.id === ticket.id
                    ? { ...item, status: "In Progress" }
                    : item
            )
        );
        toast.warn('In Progress!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }, []);

    const handleResolve = (ticket) => {
        setResolveTickets([...resolveTickets, ticket]);
        setCountInProgress(countInProgress - 1);
        setTickets(tickets.filter(item => item.id !== ticket.id));

        toast.success('Resolve!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const handleRemove = (ticket) => {
        setResolveTickets(resolveTickets.filter(item => item.id !== ticket.id));

        const newTicket = { ...ticket, status: "Open" };
        setTickets([...tickets, newTicket]);

        setCountInProgress(countInProgress + 1)

        toast.error('Remove!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }



    useEffect(() => {
        setCountInProgress(progressTickets.length);
    }, [progressTickets, setCountInProgress])


    return (
        <div className="grid grid-cols-4 gap-8">
            <div className="col-span-4 lg:col-span-3">
                <h3 className="text-2xl font-semibold text-[#34485A]">Customer Tickets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        tickets.length > 0
                            ?
                            tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} handleProgress={handleProgress}></Ticket>)
                            :
                            <div className="col-span-1 md:col-span-2 text-center flex justify-center items-center h-screen">
                                <h3 className="text-2xl font-bold">No Ticket Issue !</h3>
                            </div>
                    }
                </div>
            </div>
            <div className="col-span-4 lg:col-span-1">
                <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-[#34485A]">Task Status</h3>
                    {
                        progressTickets.length > 0
                            ?
                            progressTickets.map(ticket =>
                                <TaskStatus key={ticket.id} handleResolve={handleResolve} ticket={ticket}></TaskStatus>)
                            :
                            <p className="text-[#627382]">Select a ticket to add to Task Status</p>
                    }
                </div>
                <div className="mt-8 space-y-3">
                    <h3 className="text-2xl font-semibold text-[#34485A]">Resolved Task</h3>
                    {
                        resolveTickets.length > 0
                            ? resolveTickets.map(ticket =>
                                <ResolveTask key={ticket.id} ticket={ticket} handleRemove={handleRemove}></ResolveTask>)
                            :
                            <p className="text-[#627382]">No resolved tasks yet.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default TicketContainer;