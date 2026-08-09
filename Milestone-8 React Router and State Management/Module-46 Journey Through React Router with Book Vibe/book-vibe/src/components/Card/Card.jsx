import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuHash } from "react-icons/lu";
import { PiNoteLight } from "react-icons/pi";
import { Link } from 'react-router';

const Card = ({ book }) => {
    const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book;
    return (
        <div className="border border-[#13131326] rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 mt-6 text-center md:text-left">
            <div className="bg-[#1313130D] rounded-2xl py-7 px-12">
                <img className="max-h-70 md:max-h-43" src={image} alt="book" />
            </div>
            <div className="space-y-4 flex-1">
                <h2 className="text-2xl font-playfair font-bold">{bookName}</h2>
                <p className="text-[#131313CC] font-medium font-work-sans">By : {author}</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="font-bold">Tag </span>
                        <div className="flex items-center gap-3">
                            {
                                tags.map((tag, index) =>
                                    <div key={index} className="text-[#23BE0A] py-1.5 px-4 bg-[#23BE0A0D] rounded-3xl flex items-center font-medium">
                                        <LuHash />{tag}
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#131313CC] font-normal font-work-sans">
                        <CiLocationOn />
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex items-center gap-2 text-[#131313CC] font-normal font-work-sans">
                        <HiOutlineUsers />
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[#131313CC] font-normal font-work-sans">
                        <PiNoteLight />
                        <p>Page {totalPages}</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="text-[#328EFF] py-1.5 px-4 bg-[#328EFF26] rounded-3xl flex items-center font-medium"><p>Category: {category}</p></div>
                    <div className="text-[#FFAC33] py-1.5 px-4 bg-[#FFAC3326] rounded-3xl flex items-center font-medium"><p>Rating: {rating}</p></div>
                    <div className="text-white py-1.5 px-4 bg-[#23BE0A] rounded-3xl flex items-center font-medium">
                        <Link to={`/bookDetails/${bookId}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;