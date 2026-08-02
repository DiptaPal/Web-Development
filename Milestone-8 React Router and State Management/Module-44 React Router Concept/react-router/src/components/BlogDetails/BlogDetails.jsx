import { use } from 'react';

const BlogDetails = ({ blogPromise }) => {
    const blog = use(blogPromise);
    const { body } = blog;
    return (
        <div className="text-justify">
            <p>{body}</p>
        </div>
    );
};

export default BlogDetails;