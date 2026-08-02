
import { Link, useNavigate } from 'react-router';
const Post = ({ post }) => {
    const { userId, id, title } = post;
    const postStyle = {
        border: "2px solid yellow",
        borderRadius: "20px",
        padding: "10px",
        margin: "10px"
    }

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`)
    }

    return (
        <div>
            <div style={postStyle}>
                <p>User Id: {userId}</p>
                <h3>{title}</h3>
                <Link to={`/posts/${id}`}>
                    <button>Show Details</button>
                </Link>
                <button onClick={handleNavigate}>Details of {id}</button>
            </div>
        </div>
    );
};

export default Post;