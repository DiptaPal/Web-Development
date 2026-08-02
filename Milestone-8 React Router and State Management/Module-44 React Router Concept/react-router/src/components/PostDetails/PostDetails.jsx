
import { useLoaderData, useNavigate } from 'react-router';
const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const { title, body } = post;

    return (
        <div className="mx-10">
            <div className="card w-full mx-auto bg-base-100 card-lg shadow-sm my-10">
                <div className="card-body flex flex-col space-y-4">
                    <div className="flex-1">
                        <h2 className="card-title capitalize">{title}</h2>
                    </div>
                    <div className="flex-1">
                        <p>{body}</p>
                    </div>
                    <div className="justify-end card-actions">
                        <button onClick={() => navigate(-1)} className="btn btn-primary">Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;