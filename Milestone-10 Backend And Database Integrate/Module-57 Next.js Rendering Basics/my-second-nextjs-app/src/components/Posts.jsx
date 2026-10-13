'use client'
import { use } from "react";

const Posts = ({postsPromise}) => {
    const posts = use(postsPromise)
    return (
        <div>
            <h2 className="text-4xl">Posts: {posts.length}</h2>
        </div>
    );
};

export default Posts;
