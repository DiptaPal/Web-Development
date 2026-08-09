import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookId, image, bookName, tags, author, category, rating } = book;
    return (
        <Link to={`/bookDetails/${bookId}`} className="card  shadow-sm rounded-2xl border border-[rgba(19,19,19,0.15)] hover:cursor-pointer hover:bg-gray-300">
            <figure className="m-6 bg-[#F3F3F3] rounded-2xl">
                <img
                    src={image}
                    alt="Shoes"
                    className="max-h-50 p-6" />
            </figure>
            <div className="card-body pt-0">
                <div className="flex items-center gap-3">
                    {
                        tags.map((tag, index) =>
                            <div key={index} className="text-[#23BE0A] py-1.5 px-4 bg-[#23BE0A0D] rounded-3xl">
                                {tag}
                            </div>)
                    }
                </div>
                <h2 className="card-title font-bold text-2xl">
                    {bookName}
                </h2>
                <p>By: {author}</p>
                <div className="py-5">
                    <div className="h-px w-full bg-[repeating-linear-gradient(to_right,#9ca3af_0_8px,transparent_8px_16px)]"></div>
                </div>
                <div className="card-actions font-work-sans font-medium flex justify-between items-center">
                    <div>
                        <h3>{category}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <h3>{rating}</h3>
                        <FaRegStar />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;