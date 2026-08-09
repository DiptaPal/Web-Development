
import { useLoaderData, useParams } from 'react-router';
import { addToStoreLS } from '../../utility/addToLS';
const BookDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    const book = books.find(book => book.bookId === parseInt(bookId));
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    

    return (
        <div className="my-16 flex flex-col md:flex-row justify-between items-stretch gap-10">
            <div className="w-full md:w-[calc(50%-20px)] p-8 md:p-12 lg:p-18 bg-[rgba(19,19,19,0.05)] rounded-2xl flex items-center justify-center flex-1">
                <img src={image} alt="book" className="max-w-full max-h-full" />
            </div>
            <div className="w-full md:w-[calc(50%-20px)] font-work-sans space-y-5 flex flex-col justify-between flex-1">
                <h1 className="font-playfair font-bold text-4xl">{bookName}</h1>
                <h4 className="text-xl font-medium text-[#131313CC]">By: {author}</h4>
                <div className="border border-[rgba(19,19,19,0.15)] mt-6"></div>
                <h4 className="text-xl font-medium text-[#131313CC]">{category}</h4>
                <div className="border border-[rgba(19,19,19,0.15)]"></div>
                <p className="text-justify"><span className="font-bold">Review : </span>{review}</p>
                <div className="flex items-center gap-2">
                    <span className="font-bold">Tag :</span>
                    <div className="flex items-center gap-3">
                        {
                            tags.map((tag, index) =>
                                <div key={index} className="text-[#23BE0A] py-1.5 px-4 bg-[#23BE0A0D] rounded-3xl">
                                    {tag}
                                </div>)
                        }
                    </div>
                </div>
                <div className="border border-[rgba(19,19,19,0.15)]"></div>
                <div className="grid grid-cols-[160px_1fr] items-center gap-4"
                >
                    <span className="text-gray-500 font-normal">Number of Page: </span>
                    <span className="text-gray-900 font-bold">{totalPages}</span>
                    <span className="text-gray-500 font-normal">Publisher: </span>
                    <span className="text-gray-900 font-bold">{publisher}</span>
                    <span className="text-gray-500 font-normal">Year of Publishing: </span>
                    <span className="text-gray-900 font-bold">{yearOfPublishing}</span>
                    <span className="text-gray-500 font-normal">Rating: </span>
                    <span className="text-gray-900 font-bold">{rating}</span>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => addToStoreLS(bookId, "read")} className="btn border border-[#1313134D] bg-white hover:bg-gray-200">Mark as Read</button>
                    <button onClick={() => addToStoreLS(bookId, "wish")} className="btn border border-[#50B1C9] bg-[#50B1C9] text-white hover:text-black hover:bg-gray-200">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;