import { updateProfile } from 'firebase/auth';
import { use, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { uploadImage } from '../../api/imgBB';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import { useCreateUser } from '../../hooks/useCreateUser';

const Register = () => {

    const { register, handleSubmit, reset, getValues, control, formState: { errors } } = useForm({ mode: "onChange" });

    const { mutate, mutateAsync, isPending } = useCreateUser();

    const { createUser, signInWithGoogle, singOutUser } = use(AuthContext);

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const password = useWatch({
        control,
        name: "password",
        defaultValue: ""
    })

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /[0-9]/.test(password);


    const onSubmit = async (data) => {
        try {
            setError("");
            if (data.password !== data.conformPassword) {
                setError("Password and Conform Password don't match.");
            } else {

                // Upload image in imgBB
                const imageUrl = await uploadImage(data.image[0]);

                // Create user
                const userCredential = await createUser(data.email, data.password);
                const user = userCredential.user;

                // Update user profile
                await updateProfile(user, {
                    displayName: data.name,
                    photoURL: imageUrl
                })

                // Create a user in database
                const newUser = {
                    uid: user.uid,
                    name: data.name,
                    email: user.email,
                    image: imageUrl
                }

                await mutateAsync(newUser);

                // User sign out
                await singOutUser();
                reset()

                toast.success("Registration successful!");

                // Navigate to login page
                navigate("/login");
            }


        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError("Email already in use");
                    break;

                case "auth/invalid-email":
                    setError("Please enter a valid email address");
                    break;

                default:
                    setError(error.message);
            }
        }

    }

    const handleGoogleSignIn = () => {
        setError("");
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                const newUser = {
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }

                mutate(newUser, {
                    onSuccess: () => {
                        toast.success("Login successful!");
                        navigate(location.state || '/')
                    },
                    onError: (error) => {
                        setError(error.response?.data?.message || error.message);
                    }
                })
            })
            .catch(error => {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        setError("Email already in use");
                        break;

                    case "auth/invalid-email":
                        setError("Please enter a valid email address");
                        break;

                    default:
                        setError(error.message);
                }
            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center p-4 ">
            <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
                <div className="card-body px-8 py-10 text-center">

                    {/* Title & Login Link */}
                    <h2 className="text-3xl font-bold text-slate-800 mb-1">Register Now!</h2>
                    <p className="text-sm font-medium text-slate-600 mb-6">
                        Already have an account?{' '}
                        <Link to="/login" className="text-[#9F62F2] hover:underline font-semibold">
                            Login Now
                        </Link>
                    </p>

                    {/* Registration Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">

                        {/* Name Input */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Mariam Swarna"
                                {...register('name',
                                    {
                                        required: 'Name is required',
                                        minLength: {
                                            value: 5,
                                            message: "Name must be at least 5 characters"
                                        },
                                        maxLength: {
                                            value: 32,
                                            message: "Name must not exceed 32 characters"
                                        }
                                    })
                                }
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 
                                    ${errors.name ?
                                        "input-error"
                                        :
                                        ""
                                    }`
                                }
                            />
                            {
                                errors.name && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.name.message}
                                    </span>
                                )
                            }
                        </div>

                        {/* Email Input */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="smsowkothasan@gmail.com"
                                {...register("email",
                                    {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })
                                }
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 
                                    ${errors.name ?
                                        "input-error"
                                        :
                                        ""
                                    }`
                                }
                            />
                            {
                                errors.email && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.email.message}
                                    </span>
                                )
                            }
                        </div>

                        {/* Image Input */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Profile Picture</span>
                            </label>
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png,.webp"
                                {...register("image", {
                                    required: "Profile image is required",
                                    validate: {
                                        fileType: (files) => {
                                            const file = files?.[0];

                                            if (!file) return true;

                                            const allowedTypes = [
                                                "image/png",
                                                "image/jpeg",
                                                "image/png",
                                                "image/webp"
                                            ];

                                            return (
                                                allowedTypes.includes(file.type) ||
                                                "Only JPG, PNG, and WEBP images are allowed"
                                            )

                                        }
                                    }
                                })}
                                className={`file-input w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400  
                                    ${errors.image ?
                                        "file-input-error"
                                        :
                                        ""
                                    }`
                                }
                            />

                            <p className="text-xs text-slate-400 mt-1">
                                Choose a profile image (.jpg, .jpeg, .png, .webp)
                            </p>

                            {errors.image && (
                                <span className="text-error text-xs mt-1">
                                    {errors.image.message}
                                </span>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="*************"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
                                            message:
                                                "Password must contain uppercase, lowercase, number and special character"
                                        }
                                    })}
                                    className={`input input-border w-full pr-12 focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 ${errors.password ? "input-error" : ""
                                        }`}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#9F62F2]"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash size={18} />
                                    ) : (
                                        <FaEye size={18} />
                                    )}
                                </button>
                            </div>
                            <div className="mt-2 space-y-1 text-xs">

                                {/* Uppercase */}
                                <p className={hasUppercase ? "text-green-500" : "text-slate-400"}>
                                    {hasUppercase ? "✓" : "○"} At least one uppercase letter
                                </p>

                                {/* Lowercase */}
                                <p className={hasLowercase ? "text-green-500" : "text-slate-400"}>
                                    {hasLowercase ? "✓" : "○"} At least one lowercase letter
                                </p>

                                {/* Number */}
                                <p className={hasNumber ? "text-green-500" : "text-slate-400"}>
                                    {hasLowercase ? "✓" : "○"} At least one number
                                </p>

                                {/* Special Character */}
                                <p className={hasSpecial ? "text-green-500" : "text-slate-400"}>
                                    {hasSpecial ? "✓" : "○"} At least one special character
                                </p>
                            </div>
                            {
                                errors.password && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.password.message}
                                    </span>
                                )
                            }
                        </div>

                        {/* Conform Password Input*/}
                        {/* Password Input */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Conform Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="*************"
                                    {...register("conformPassword", {
                                        required: "Confirm password is required",
                                        validate: (value) =>
                                            value === getValues("password") ||
                                            "Passwords do not match"
                                    })}
                                    className={`input input-border w-full pr-12 focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 ${errors.conformPassword ? "input-error" : ""
                                        }`}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#9F62F2]"
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash size={18} />
                                    ) : (
                                        <FaEye size={18} />
                                    )}
                                </button>
                            </div>
                            {
                                errors.conformPassword && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.conformPassword.message}
                                    </span>
                                )
                            }
                        </div>

                        <div>
                            {
                                error && (
                                    <span className="text-error text-xs mt-1">
                                        {error}
                                    </span>
                                )
                            }
                        </div>

                        {/* Gradient Register Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="btn border-none w-full text-white font-semibold normal-case text-base shadow-md hover:opacity-95"
                                style={{ background: 'linear-gradient(125deg, #632EE3 5.68%, #9F62F2 88.38%)' }}
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="divider text-xs font-bold text-slate-700 my-6">OR</div>

                    {/* Google Sign Up Button */}
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        disabled={isPending}
                        className="btn btn-outline border-slate-300 w-full hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300 normal-case font-semibold text-slate-700 gap-2"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                        Sign Up With Google
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Register;