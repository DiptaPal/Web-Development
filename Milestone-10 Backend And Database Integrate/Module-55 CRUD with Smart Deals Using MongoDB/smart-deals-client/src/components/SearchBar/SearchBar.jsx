import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className="w-full max-w-xl mx-auto px-4 sm:px-0">
            <div className="flex items-center w-full bg-white rounded-full shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <input
                    type="text"
                    placeholder="search For Products, Categories..."
                    className="input input-ghost grow border-none focus:outline-none focus:bg-transparent text-slate-600 placeholder:text-slate-400 pl-4 sm:pl-6 text-sm sm:text-base min-w-0"
                />
                <button
                    aria-label="Search"
                    className="btn border-none bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-r-full rounded-l-none min-h-0 h-10 sm:h-12 px-4 sm:px-6 flex items-center justify-center shrink-0"
                >
                    <FiSearch className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;