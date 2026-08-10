import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from 'react-router';

const AppError = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/")
    }

    return (
        <div className="w-full max-w-2xl aspect-video mx-auto mb-10">
            <DotLottieReact src="https://lottie.host/f192b76d-ea89-4b9a-b1ec-097dcb196e91/Gy7Aup8dGN.lottie" loop autoplay />
            <div className="space-y-2 text-center mb-4">
                <h1 className="text-2xl md:text-5xl text-[#001931] font-semibold">Oops, page not found!</h1>
                <p className="text-xl text-[#627382]">The App you are requesting is not found on our system.  please try another apps.</p>
            </div>
            <div className="flex justify-center items-center gap-3">
                <button onClick={handleHome} className="py-2 px-4 rounded bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white cursor-pointer">Go Back!</button>
            </div>
        </div>
    );
};

export default AppError;