import Image from 'next/image';
import Link from 'next/link';

const Friends = ({ friend }) => {
    const { id, name, picture, status, days_since_contact, tags } = friend;
    return (
        <Link href={`/friends/${id}`} className="h-full">
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
                <p className='text-[#64748B] text-xs'>{days_since_contact}d ago</p>
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
                <div className='mt-auto'>
                    <button className={`px-3 py-1 rounded-full text-white capitalize ${status === "overdue" ? "bg-[#EF4444]" : `${status === "on-track" ? "bg-[#244D3F]" : "bg-[#EFAD44]"}`}`}>{status}</button>
                </div>
            </div>
        </Link>
    );
};

export default Friends;