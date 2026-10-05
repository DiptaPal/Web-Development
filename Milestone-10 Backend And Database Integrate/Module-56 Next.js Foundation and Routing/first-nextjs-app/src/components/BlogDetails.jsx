import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({blog}) => {
    return (
        <main className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link href="/blogs" className="btn btn-ghost mb-5">
                    ← Back to Blogs
                </Link>
                {/* Blog Card */}
                <article className="card bg-base-100 shadow-xl overflow-hidden">
                    {/* Blog Image */}
                    <figure className="h-72 md:h-96">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={1200}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    {/* Blog Information */}
                    <div className="card-body">
                        {/* Category */}
                        <div>
                            <span className="badge badge-primary"> {blog.category} </span>
                        </div>
                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-bold mt-3"> {blog.title} </h1>
                        {/* Author & Date */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60 mt-2">
                            <span>
                                ✍️ By
                                <span className="font-semibold text-base-content">
                                    {blog.author}
                                </span>
                            </span>
                            <span>•</span> <span> 📅 {blog.date} </span>
                        </div>
                        <div className="divider"></div> {/* Description */}
                        <p className="text-lg font-medium leading-relaxed">
                            {blog.description}
                        </p>
                        {/* Content */}
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold mb-3"> About This Article </h2>
                            <p className="text-base-content/70 leading-8"> {blog.content} </p>
                        </div>
                        {/* Bottom Button */}
                        <div className="card-actions justify-end mt-8">
                            <Link href="/blogs" className="btn btn-primary">
                                ← All Blogs
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </main>

    );
};

export default BlogDetails;