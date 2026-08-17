import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { use, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './../../context/AuthContext';

const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const { createUser, singInWithGoogle } = use(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const terms = e.target.checkbox.checked;

        console.log(name, email, photoURL, password, terms);

        if (!terms) {
            setError("Please accept our terms and conditions.")
            return;
        }

        const passwordPattern =
            /^(?=.{6,}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;

        if (!passwordPattern.test(password)) {
            setError("Password must be at least 6 characters and contain one uppercase letter, one lowercase letter, one number, and one special character.")
            return;
        }

        // reset error  and success
        setError("");
        setSuccess(false);

        createUser(email, password)
            .then((userCredential) => {
                setSuccess(true);
                e.target.reset();

                const updatedProfile = {
                    displayName: name,
                    photoURL: photoURL
                }

                updateProfile(userCredential.user, updatedProfile).
                    then(() => {
                        alert("Profile Updated!")
                    }).
                    catch((error) => {
                        setError(error.message)
                    })

                sendEmailVerification(userCredential.user).
                    then(() => {
                        alert("Please login to your email and verify your email address.")
                    }).
                    catch((error) => {
                        setError(error.message)
                    })

            }).catch((error) => {
                setError(error.message);
            })

    }

    const handleToggleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    const handleGoogleSignIn = () => {
        singInWithGoogle().
            then(() => {
                navigate(location.state || "");
            }).
            catch((error) => {
                setError(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegistration}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" name="name" required />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" required />
                                <label className="label">Photo URL</label>
                                <input type="text" className="input" placeholder="Photo URL" name="photoURL" required />
                                <label className="label">Password</label>
                                <div className="relative input">
                                    <input type={showPassword ? "text" : "password"} className="input" placeholder="Password" name="password" required />
                                    <button onClick={handleToggleShowPassword} className="btn btn-xs absolute top-1/2 right-2 -translate-y-1/2 text-lg cursor-pointer">{showPassword ? <IoMdEyeOff /> : <IoMdEye />}</button>
                                </div>
                                <label className="label mt-2">
                                    <input type="checkbox" className="checkbox" name="checkbox" />
                                    Accept Our Terms and Conditions
                                </label>
                                <button className="btn btn-neutral mt-4">Registration</button>
                            </fieldset>
                            {
                                success && <p className="text-green-500">Account created successfully.</p>
                            }
                            {
                                error && <p className="text-red-500">{error}</p>
                            }
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p>Already Have an account? <Link to="/login" className="text-blue-500 underline">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;