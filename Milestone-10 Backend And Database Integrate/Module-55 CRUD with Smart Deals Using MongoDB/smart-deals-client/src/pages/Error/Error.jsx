import { Lottie } from "lottie-react";
import { Link } from 'react-router';
import errorAnimation from "../../assets/error.json";


const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
            <Lottie
                src={errorAnimation}
                autoplay={true}
                loop={true}
                className="w-80 h-80"
            />
            <h1 className="text-4xl font-bold">
                Oops! Page Not Found
            </h1>

            <p className="mt-3 text-gray-500">
                The page you're looking for doesn't exist.
            </p>

            <Link to="/" className="btn border-0 rounded-md px-3 md:px-5 py-2 font-medium text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] mt-5">
                Go Home
            </Link>
        </div>
    );
};

export default Error;