import { useMemo, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router';
import ReadList from '../../components/ReadList/ReadList';
import WishList from '../../components/WishList/WishList';
import { getStoredBooks } from '../../utility/addToLS';

const ListedBooks = () => {
    const booksData = useLoaderData();

    const storedReadBooksData = getStoredBooks("read");
    const storeWishBooksData = getStoredBooks("wish");

    const storedReadBooks = storedReadBooksData.map(id => parseInt(id));
    const storedWishBooks = storeWishBooksData.map(id => parseInt(id));


    const myReadList = booksData.filter(book => storedReadBooks.includes(book.bookId));

    const myWishList = booksData.filter(book => storedWishBooks.includes(book.bookId));

    const [active, setActive] = useState(true);

    const [sort, setSort] = useState("");

    const sortedReadList = useMemo(() => {
        const list = [...myReadList];
        if (sort === "pages") {
            return list.sort((a, b) => a.totalPages - b.totalPages);
        } if (sort === "ratings") {
            return list.sort((a, b) => a.rating - b.rating);
        }
        return list;
    }, [myReadList, sort]);

    const sortedWishList = useMemo(() => {
        const list = [...myWishList];
        if (sort === "pages") {
            return list.sort((a, b) => a.totalPages - b.totalPages);
        } if (sort === "ratings") {
            return list.sort((a, b) => a.rating - b.rating);
        } return list;
    }, [myWishList, sort]);

    const handleSort = (type) => {
        setSort(type);
    }

    return (
        <div className="mt-8 mb-10">
            <div className="text-2xl font-bold text-center font-work-sans text-[#131313] bg-[#1313130D] rounded-2xl py-8">
                <h2>Book</h2>
            </div>
            <div className="mt-8 mb-12 flex justify-center items-center">
                <div className="dropdown dropdown-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By{sort && ":"} {sort.charAt(0).toUpperCase() + sort.slice(1)}<IoIosArrowDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                        <li><a onClick={() => handleSort("ratings")}>Ratings</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center ">
                <button onClick={() => {
                    setActive(true);
                    sort && setSort("");
                }} className={`${active ?
                    "border-l border-t border-r rounded-tl-lg rounded-tr-lg text-[#131313CC]"
                    :
                    "border-b text-[#13131380]"} py-3 px-4 cursor-pointer border-[#1313134D]`}
                >Read Books
                </button>

                <button onClick={() => {
                    setActive(false);
                    sort && setSort("");
                }} className={`${active ?
                    "border-b border-[#1313134D] text-[#13131380]"
                    :
                    "border-l border-t border-r rounded-tl-lg rounded-tr-lg text-[#131313CC]"} py-3 px-3 text-left cursor-pointer border-[#1313134D]`}
                >Wishlist Books
                </button >
                <div className="border-b border-[#1313134D] w-full flex-1 py-6">
                </div>
            </div >
            <div className="mt-8 mb-12">
                {
                    active ? <ReadList myReadList={sortedReadList}></ReadList> : <WishList myWishList={sortedWishList}></WishList>
                }
            </div>
        </div >
    );
};

export default ListedBooks;