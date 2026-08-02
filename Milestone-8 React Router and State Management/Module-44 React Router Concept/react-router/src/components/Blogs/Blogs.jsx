import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 my-10">
            {
                blogs.map(blog =>
                    <Blog key={blog.id} blog={blog}></Blog>
                )
            }
        </div>
    );
};

export default Blogs;