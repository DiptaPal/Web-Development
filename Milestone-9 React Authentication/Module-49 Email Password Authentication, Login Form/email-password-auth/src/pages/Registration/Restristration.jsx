import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router';
import { auth } from "../../firebase/firebase.init";

const Registration = () => {

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        if (!terms) {
            setError("Please accept our terms and conditions");
            return;
        }

        const passwordPattern =
            /^(?=.{6,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;

        if (!passwordPattern.test(password)) {
            setError(
                "Password must be at least 6 characters and contain one uppercase letter, one lowercase letter, one number, and one special character."
            );
            return;
        }


        // reset error & success
        setSuccess(false)
        setError("");

        createUserWithEmailAndPassword(auth, email, password).
            then((userCredential) => {
                setSuccess(true);
                e.target.reset();

                const updatedProfile = {
                    displayName: name,
                    photoURL: photoURL,
                }

                updateProfile(userCredential.user, updatedProfile).
                    then(() => {
                        console.log("Profile Updated!");
                    }).catch(() => {

                    })

                sendEmailVerification(userCredential.user).
                    then(() => {
                        alert("Please login to your email and verify your email address.");
                    }).catch(() => {

                    })
                // console.log(userCredential.user);

            }).catch((error) => {
                setError(error.message);
            })
    }

    const handleToggleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" required name="name" className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" required name="email" className="input" placeholder="Email" />
                                <label className="label">Photo URL</label>
                                <input type="text" required name="photoURL" className="input" placeholder="Photo URL" />
                                <label className="label">Password</label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} name="password" className="input"
                                        required
                                        placeholder="Password" />
                                    <button onClick={handleToggleShowPassword} className="btn btn-xs absolute top-1/2 right-6 -translate-y-1/2">{showPassword ? <IoMdEyeOff /> : <IoMdEye />}</button>
                                </div>
                                <div>
                                    <label className="label">
                                        <input type="checkbox"
                                            name="terms"
                                            className="checkbox" />
                                        Accept Our Terms and Conditions
                                    </label>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                            {
                                success && <p className="text-green-500">Account created successfully.</p>
                            }
                            {
                                error && <p className="text-red-500">{error}</p>
                            }
                        </form>
                        <p>Already Have an account? <Link to="/login" className="text-blue-500 underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;