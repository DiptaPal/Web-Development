import { Suspense } from 'react';
import Categories from "../Categories/Categories";


const categoriesPromise = fetch("https://openapi.programming-hero.com/api/news/categories").then(res => res.json());
const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
                <Categories categoriesPromise={categoriesPromise}></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;