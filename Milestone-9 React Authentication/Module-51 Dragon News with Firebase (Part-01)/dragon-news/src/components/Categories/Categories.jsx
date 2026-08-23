import { use } from 'react';
import { NavLink } from 'react-router';
import "./Categories.css";

const Categories = ({ categoriesPromise }) => {
    const categories = use(categoriesPromise);

    return (
        <div>
            <h3 className="text-xl font-semibold text-primary mb-5">All Category</h3>
            <div className="flex flex-col">
                {
                    categories.data.news_category.map(category => <NavLink key={category.category_id} className="w-full text-left pl-10 py-3.5 pr-4 rounded-md text-base transition-all duration-200 text-accent-content hover:text-primary hover:bg-base-300 font-semibold" to={`category/${category.category_id}`}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;