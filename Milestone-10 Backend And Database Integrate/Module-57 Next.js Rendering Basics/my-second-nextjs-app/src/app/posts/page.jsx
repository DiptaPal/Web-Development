import Posts from "@/components/Posts";
import { Suspense } from "react";

const PostsPage = () => {

    const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

    return (
        <div>
            <Suspense fallback={<h2 className="text-3xl">Loading...</h2>}>
                <Posts postsPromise={postsPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostsPage;