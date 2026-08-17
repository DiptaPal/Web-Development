import { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [error, setError] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();

    const location = useLocation();

    const { signInUser, signInWithGoogle, passwordReset } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");

        signInUser(email, password).
            then((result) => {
                // console.log(result.user);
                if (!result.user.emailVerified) {
                    alert("Please verify your email address.");
                }
                // console.log(result.user);
                e.target.reset();
                navigate(location.state || '/')
            }).catch((error) => {
                // console.log(error.message);
                setError(error.message)
            })

    }

    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        passwordReset(email).
            then(() => {
                alert("Password reset email sent!");
            }).catch((error) => {
                setError(error.message)
            })
    }

    const handleGoogleSingIn = () => {
        signInWithGoogle().
            then((result) => {
                if (!result.user.emailVerified) {
                    alert("Please verify your email address.")
                }
                // console.log(result.user);
                navigate(location.state || '/')
            }).
            catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><button type="button" onClick={handlePasswordReset} className="link link-hover">Forgot password?</button></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            {
                                error && <p className="text-red-500">{error}</p>
                            }
                        </form>
                        <button onClick={handleGoogleSingIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p>New to our website? <Link to="/registration" className="text-blue-500 underline">Registration</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;