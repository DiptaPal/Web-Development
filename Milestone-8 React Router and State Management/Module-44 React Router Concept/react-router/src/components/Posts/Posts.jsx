
import { use } from 'react';
import Post from '../Post/Post';
const Posts = ({ postsPromise }) => {

    const posts = use(postsPromise);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 max-w-300 mx-auto px-4 md:px-0 mt-10">
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;