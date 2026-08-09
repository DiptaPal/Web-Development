import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/")
    }

    const handleReload = () => {
        window.location.reload();
    }

    return (
        <div className="w-full max-w-2xl aspect-video mx-auto">
            <DotLottieReact src="https://lottie.host/f192b76d-ea89-4b9a-b1ec-097dcb196e91/Gy7Aup8dGN.lottie" loop autoplay />
            <div className="flex justify-center items-center gap-3">
                <button onClick={handleHome} className="btn btn-info">Home</button>
                <button onClick={handleReload} className="btn btn-accent">Reload</button>
            </div>
        </div>
    );
};

export default Error;