import { Suspense } from 'react';
import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";
import Loader from "../../components/Loader/Loader";


const booksPromise = fetch("booksData.json").then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner />
            <div>
                <h2 className="text-4xl font-bold mt-24 mb-9 text-center">Books</h2>
                <Suspense fallback={<Loader />}>
                    <Books booksPromise={booksPromise} />
                </Suspense>
            </div>
        </div>
    );
};

export default Home;