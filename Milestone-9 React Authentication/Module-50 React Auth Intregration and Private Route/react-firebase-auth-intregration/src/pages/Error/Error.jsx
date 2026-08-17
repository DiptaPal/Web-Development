import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col h-screen justify-around items-center gap-20">
            <h3>Error Happen</h3>
            <Link to="/" className="btn">Back to Home</Link>
        </div>
    );
};

export default Error;