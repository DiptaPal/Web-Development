const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayPost(data));
};

const displayPost = (posts) => {
    // 1. get the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";

    /* for (let i = 0; i < posts.length; i++) {
        console.log(posts[i]);
    } */

    /* for(const post of posts){
        console.log(post);
    } */

    posts.forEach((post) => {
        // console.log(post);

        // 2. create element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
            <div class="post-card">
                <h2>${post.title}</h2>
                <p>
                    ${post.body}
                </p>
            </div>
        `;

        // 3. add into container
        postContainer.append(postCard);
    });
};
