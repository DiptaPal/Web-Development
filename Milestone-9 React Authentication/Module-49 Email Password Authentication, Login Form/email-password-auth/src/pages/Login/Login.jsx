import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from 'react';
import { Link } from 'react-router';
import { auth } from "../../firebase/firebase.init";

const Login = () => {
    const [error, setError] = useState("");
    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");

        signInWithEmailAndPassword(auth, email, password).
            then((result) => {
                // console.log(result.user);
                if (!result.user.emailVerified) {
                    alert("Please verify your email address.")
                }
                // console.log(result.user);
            }).catch((error) => {
                // console.log(error.message);
                setError(error.message)
            })

    }

    const handlePasswordReset = () => {
        const user = emailRef.current.value;
        sendPasswordResetEmail(auth, user).
            then(() => {
                alert("Password reset email sent!");
            }).catch((error) => {
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
                        <p>New to our website? <Link to="/register" className="text-blue-500 underline">Registration</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;