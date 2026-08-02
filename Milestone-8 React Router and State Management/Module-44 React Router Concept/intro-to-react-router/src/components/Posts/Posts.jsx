
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';
const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;