// step:3
/* const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
} */

// step:2

/* const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    } catch (error) {
        throw new Error("fail to fetch posts");
    }
} */

// step:4
const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error("fail to fetch posts");
    }

    return res.json();
}



const PostsPage = async () => {
    // step:1 

    /* const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json(); */

    // step:2
    const posts = await getPosts();

    return (
        <div>
            <h2>Total Posts: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;