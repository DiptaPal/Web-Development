import { use, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './../../context/AuthContext';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const { signInUser } = use(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // reset error
        setError("");

        signInUser(email, password).
            then((result) => {
                if (!result.user.emailVerified) {
                    alert("Please verify your email address.");
                }
                e.target.reset();
                navigate(location.state || "/")
            }).
            catch((error) => {
                setError(error.message)
            })
    }

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="max-w-130 mx-auto">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-10">
                <div>
                    <h1 className="text-primary text-4xl font-semibold text-center">Login your account</h1>
                </div>
                <div className="border border-base-300 h-px mt-10"></div>
                <div className="card-body">
                    <form onSubmit={handleSignIn}>
                        <fieldset className="fieldset">
                            <label className="label text-primary text-xl font-semibold">Email address</label>
                            <input type="email" className="w-full bg-base-200 outline-none p-4 border-none rounded text-base" placeholder="Enter your email address" name="email" required />


                            <label className="label text-primary text-xl font-semibold mt-3">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"} className="w-full bg-base-200 outline-none p-4 border-none rounded text-base"
                                    placeholder="Enter your password" name="password" required />
                                <button type="button" onClick={handleShowPassword} className="absolute top-1/2 right-2 -translate-y-1/2">
                                    {
                                        showPassword ?
                                            <IoMdEyeOff size={24} />
                                            :
                                            <IoMdEye size={24} />
                                    }
                                </button>
                            </div>

                            <button className="rounded bg-primary mt-4 text-white text-xl font-semibold py-3 cursor-pointer">Login</button>
                        </fieldset>
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                    </form>
                    <p className="font-semibold text-accent">Dont’t Have An Account ? <Link className="text-secondary" to="/auth/registration">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;