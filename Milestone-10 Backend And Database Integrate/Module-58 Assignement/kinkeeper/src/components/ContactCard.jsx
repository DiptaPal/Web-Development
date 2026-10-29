import Image from "next/image";

const ContactCard = ({ contact }) => {
    return (
        <div className="bg-white rounded-md shadow p-4 flex items-center gap-4">
            <Image
                src={contact.type === "call" ? "/call.png" : contact.type === "text" ? "/text.png" : "/video.png"}
                alt="video"
                width={40}
                height={40}
            />
            <div>
                <p className="text-lg font-normal text-[#64748B]"><span className="text-xl capitalize font-medium text-[#244D3F]">{contact.type}</span> with {contact.name}</p>
                <p className="text-[#64748B] font-medium">{contact.date}</p>
            </div>
        </div>
    );
};

export default ContactCard;