import BlogDetails from "@/components/BlogDetails";

const blogs = [
    {
        id: 1,
        title: "The Future of Web Development",
        author: "John Smith",
        category: "Web Development",
        date: "2026-10-01",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        description:
            "Web development is constantly evolving with new technologies, frameworks, and tools. Learn about the latest trends shaping the future of modern websites and applications.",
        content:
            "Modern web development has changed dramatically over the past few years. Technologies such as React, TypeScript, and serverless applications are helping developers build faster and more scalable websites."
    },
    {
        id: 2,
        title: "Why JavaScript Is Still Important",
        author: "Sarah Wilson",
        category: "JavaScript",
        date: "2026-09-28",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
        description:
            "JavaScript remains one of the most popular programming languages. Discover why developers continue to use it for both frontend and backend development.",
        content:
            "JavaScript powers millions of websites and applications around the world. With technologies such as Node.js, React, and modern JavaScript features, developers can create complete applications using one programming language."
    },
    {
        id: 3,
        title: "A Beginner's Guide to React",
        author: "Michael Brown",
        category: "React",
        date: "2026-09-25",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        description:
            "React makes it easier to build interactive user interfaces. This beginner-friendly guide introduces components, props, state, and hooks.",
        content:
            "React is a popular JavaScript library for building user interfaces. By breaking an application into reusable components, developers can create applications that are easier to maintain and scale."
    },
    {
        id: 4,
        title: "How to Build Better User Interfaces",
        author: "Emma Davis",
        category: "UI/UX",
        date: "2026-09-20",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        description:
            "A good user interface should be simple, accessible, and easy to understand. Explore some practical principles for creating better digital experiences.",
        content:
            "Good UI design focuses on usability and clarity. Consistent spacing, readable typography, clear navigation, and responsive layouts can significantly improve the user experience."
    }
];


const BlogDetailsPage = async ({ params }) => {
    const { blogId } = await params;

    const blog = blogs.find(blog => blog.id === parseInt(blogId));
    return (
        <div>
            {
                blog && <BlogDetails blog={blog}></BlogDetails>
            }
        </div>
    );
};

export default BlogDetailsPage;