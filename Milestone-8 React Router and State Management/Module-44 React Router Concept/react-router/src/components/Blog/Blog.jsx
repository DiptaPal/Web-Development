import { Suspense, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import BlogDetails from '../BlogDetails/BlogDetails';

const Blog = ({ blog }) => {
    const { id, name, email } = blog;

    const location = useLocation();
    console.log(location);

    const [showInfo, setShowInfo] = useState(false);
    const [visitHome, setVisitHome] = useState(false);
    if (visitHome) {
        return <Navigate to="/"></Navigate>
    }

    const blogPromise = fetch(`https://jsonplaceholder.typicode.com/comments/${id}`).then(res => res.json());

    return (
        <div className="card w-full md:w-96 mx-auto bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <div className="justify-end card-actions">
                    <button onClick={() => setShowInfo(!showInfo)} className="btn btn-primary">
                        {
                            showInfo ? "Hide" : "Show"
                        } Details
                    </button>
                </div>
                <div>
                    {
                        showInfo &&
                        <Suspense fallback={<span>Loading...</span>}>
                            <BlogDetails blogPromise={blogPromise}></BlogDetails>
                        </Suspense>
                    }
                </div>
                <div>
                    <div className="justify-end card-actions">
                        <button onClick={() => setVisitHome(true)} className="btn btn-primary">
                            Visit Home
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;