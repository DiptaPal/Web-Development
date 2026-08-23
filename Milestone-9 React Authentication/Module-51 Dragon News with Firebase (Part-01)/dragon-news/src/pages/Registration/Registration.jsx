import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { use, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router';
import { AuthContext } from './../../context/AuthContext';


const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { createUser } = use(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;




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

        // reset error and success
        setError("");
        setSuccessful(false);

        createUser(email, password).
            then((userCredential) => {
                setSuccessful(true);
                e.target.reset();

                const updatedProfile = {
                    displayName: name,
                    photoURL: photoURL
                }

                updateProfile(userCredential.user, updatedProfile).
                    then(() => {
                        alert("Profile Updated!");
                    }).
                    catch((error) => {
                        setError(error.message)
                    })

                sendEmailVerification(userCredential.user).
                    then(() => {
                        alert("Please login to your email and verify your email address.");
                    }).
                    catch((error) => {
                        setError(error.message)
                    })

                console.log(userCredential.user);
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
                    <h1 className="text-primary text-4xl font-semibold text-center">Register your account</h1>
                </div>
                <div className="border border-base-300 h-px mt-10"></div>
                <div className="card-body">
                    <form onSubmit={handleRegistration}>
                        <fieldset className="fieldset">
                            <label className="label text-primary text-xl font-semibold">Your Name</label>
                            <input type="text" name="name" className="w-full bg-base-200 outline-none p-4 border-none rounded text-base" placeholder="Enter your name" required />


                            <label className="label text-primary text-xl font-semibold mt-4">Photo URL</label>
                            <input type="text" name="photoURL" className="w-full bg-base-200 outline-none p-4 border-none rounded text-base" placeholder="Enter your photo URL" required />


                            <label className="label text-primary text-xl font-semibold mt-4">Email address</label>
                            <input type="email" name="email" className="w-full bg-base-200 outline-none p-4 border-none rounded text-base" placeholder="Enter your email address" required />


                            <label className="label text-primary text-xl font-semibold mt-4">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="w-full bg-base-200 outline-none p-4 border-none rounded text-base"
                                    placeholder="Enter your password" required />
                                <button type="button" onClick={handleShowPassword} className="absolute top-1/2 right-2 -translate-y-1/2">
                                    {
                                        showPassword ?
                                            <IoMdEyeOff size={24} />
                                            :
                                            <IoMdEye size={24} />
                                    }
                                </button>
                            </div>

                            <label className="label mt-4">
                                <input type="checkbox" className="checkbox text-accent" name="terms" required />
                                Accept <span className="font-semibold">Term & Conditions</span>
                            </label>

                            <button className="rounded bg-primary mt-4 text-white text-xl font-semibold py-3 cursor-pointer">Register</button>

                            {
                                successful && <p className="text-green-500">Account created successfully.</p>
                            }
                            {
                                error && <p className="text-red-500">{error}</p>
                            }
                        </fieldset>
                    </form>
                    <p className="font-semibold text-accent">Already Have An Account? <Link className="text-secondary" to="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;