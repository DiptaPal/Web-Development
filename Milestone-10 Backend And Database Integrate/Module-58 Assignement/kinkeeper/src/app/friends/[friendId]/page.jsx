"use client"

import useContacts from "@/app/hooks/useContacts";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MdNotificationsPaused } from "react-icons/md";
import { PiArchive } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import friendsData from "../../data/friends.json";

const FriendDetails = ({ params }) => {
    const { friendId } = useParams();

    const { contacts, setContacts } = useContacts();

    const friendDetails = friendsData.find(friend => String(friend.id) === String(friendId));

    const { id, name, picture, status, days_since_contact, tags, bio, email, goal, next_due_date } = friendDetails;

    const nextDueDate = new Date(next_due_date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });


    const handleContext = (type, name) => {
        setContacts([
            ...contacts,
            {
                type,
                name,
                date: new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                }),
            },
        ]);
        toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} with ${name}!`)
    }


    return (
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center my-20 max-w-277.5 mx-auto px-8">
            <div className="w-full lg:w-[30%]">
                <div className="h-full">
                    <div className="p-6 h-full min-h-75 flex flex-col justify-center items-center gap-2 bg-white rounded-lg border-0 shadow">
                        <div className='relative w-20 h-20'>
                            <Image
                                src={picture}
                                alt={name}
                                fill
                                sizes="80px"
                                className='rounded-full object-cover'
                            />
                        </div>

                        <h4 className='w-full text-center text-xl font-semibold text-[#1F2937] mt-1'>{name}</h4>

                        <div className="w-full flex flex-wrap justify-center gap-2">
                            {tags.map((tag, index) => (
                                <button
                                    key={index}
                                    className="rounded-full bg-[#CBFADB] px-3 py-1 font-medium text-[#244D3F] capitalize"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        <div>
                            <button className={`px-3 py-1 rounded-full text-white capitalize ${status === "overdue" ? "bg-[#EF4444]" : `${status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}`}>{status}</button>
                        </div>

                        <p className="font-medium italic text-[#64748B] text-center">&quot;{bio}&quot;</p>
                        <p className="text-[#64748B] text-sm">
                            Preferred: {email ? "Email" : "Phone"}
                        </p>
                    </div>
                </div>
                <div className="mt-4 text-[#1F2937] font-medium rounded-sm bg-white text-center w-full p-4 shadow flex justify-center items-center gap-2">
                    <MdNotificationsPaused size={20} />
                    <p>Snooze 2 weeks</p>
                </div>
                <div className="mt-4 text-[#1F2937] font-medium rounded-sm bg-white text-center w-full p-4 shadow flex justify-center items-center gap-2">
                    <PiArchive size={20} />
                    <p>Archive</p>
                </div>
                <div className="mt-4 text-[#EF4444] font-medium rounded-sm bg-white text-center w-full p-4 shadow flex justify-center items-center gap-2">
                    <RiDeleteBinLine size={20} />
                    <p>Delete</p>
                </div>
            </div>
            <div className="w-full lg:w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 gap-4">
                    <div className="text-center p-6 bg-white rounded-lg shadow">
                        <h3 className="text-lg md:text-2xl lg:text-3xl text-[#244D3F] font-semibold">{days_since_contact}</h3>
                        <p className="text-base md:text-lg text-[#64748B] mt-2">Days Since Contact</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow">
                        <h3 className="text-lg md:text-2xl lg:text-3xl text-[#244D3F] font-semibold">{goal}</h3>
                        <p className="text-base md:text-lg text-[#64748B] mt-2">Goal (Days)</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow">
                        <h3 className="text-lg md:text-2xl lg:text-3xl text-[#244D3F] font-semibold">{nextDueDate}</h3>
                        <p className="text-base md:text-lg text-[#64748B] mt-2">Next Due</p>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-medium">Relationship Goal</p>
                        <button className="text-sm font-medium text-[#1F2937] rounded-sm border border-[#E9E9E9] py-2 px-4">Edit</button>
                    </div>
                    <p className="text-lg font-medium text-[#1F2937] mt-4"><span className="text-[#64748B] font-normal">Connect every</span> {goal} days</p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg text-[#244D3F] font-medium mb-3">Quick Check-In</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <button
                            onClick={() => handleContext("call", name)}
                            className="bg-[#F8FAFC] shadow rounded-lg p-4 flex flex-col gap-2 items-center justify-center border border-[#E9E9E9] cursor-pointer">
                            <Image
                                src="/call.png"
                                alt="call"
                                width={24}
                                height={24}
                            />
                            <p className="text-[#1F2937]">Call</p>
                        </button>
                        <button
                            onClick={() => handleContext("text", name)}
                            className="bg-[#F8FAFC] shadow rounded-lg p-4 flex flex-col gap-2 items-center justify-center border border-[#E9E9E9] cursor-pointer">
                            <Image
                                src="/text.png"
                                alt="text"
                                width={24}
                                height={24}
                            />
                            <p className="text-[#1F2937]">Text</p>
                        </button>
                        <button
                            onClick={() => handleContext("video", name)}
                            className="bg-[#F8FAFC] shadow rounded-lg p-4 flex flex-col gap-2 items-center justify-center border border-[#E9E9E9] cursor-pointer">
                            <Image
                                src="/video.png"
                                alt="video"
                                width={24}
                                height={24}
                            />
                            <p className="text-[#1F2937]">Video</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;