import { useNavigate } from 'react-router';
const Error = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>This is a Error Page</h3>
            <button onClick={handleNavigate}>Go Back</button>
        </div>
    );
};

export default Error;