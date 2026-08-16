import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col h-screen justify-around items-center gap-20">
            <h3>Error Happen</h3>
            <NavLink to="/" className="btn">Back to Home</NavLink>
        </div>
    );
};

export default Error;