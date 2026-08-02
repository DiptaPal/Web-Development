import { useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div className="card w-full md:w-96 mx-auto bg-base-100 card-lg shadow-sm">
            <div className="card-body flex flex-col h-80 space-y-4">
                <div className="flex-1">
                    <h2 className="card-title capitalize">{title}</h2>
                </div>
                <div className="flex-1">
                    <p>{body}</p>
                </div>
                <div className="justify-end card-actions">
                    <button onClick={handleDetails} className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Post;