import { FaEnvelope, FaImage, FaUser } from "react-icons/fa";
import { useLoaderData, useNavigate } from 'react-router';


const UpdateUser = () => {

    const user = useLoaderData();
    const navigate = useNavigate();

    const { _id, name, email, profilePictureUrl } = user.data;


    const handleUserUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedUser = {
            name: form.name.value,
            email: form.email.value,
            profilePictureUrl: form.profilePictureUrl.value,
        };

        const res = await fetch(`http://localhost:3000/update/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        });

        const data = await res.json();

        if (data.success) {
            alert(data.message);
            window.location.href = "/"
        } else {
            alert(data.message);
        }

        form.reset();
    };

    return (
        <div className="flex justify-center items-center p-6">
            <div className="card bg-base-100 w-full max-w-lg shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Add New User
                    </h2>

                    <form onSubmit={handleUserUpdate} className="space-y-4">

                        {/* Name */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Name
                                </span>
                            </label>

                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <FaUser className="text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter user name"
                                    className="grow w-full"
                                    required
                                    defaultValue={name}
                                />
                            </label>
                        </div>

                        {/* Email */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Email
                                </span>
                            </label>

                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <FaEnvelope className="text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    className="grow w-full"
                                    required
                                    defaultValue={email}
                                />
                            </label>
                        </div>

                        {/* Profile Picture URL */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-semibold">
                                    Profile Picture URL
                                </span>
                            </label>

                            <label className="input input-bordered flex items-center gap-3 w-full">
                                <FaImage className="text-gray-400" />
                                <input
                                    type="url"
                                    name="profilePictureUrl"
                                    placeholder="https://example.com/image.jpg"
                                    className="grow w-full"
                                    required
                                    defaultValue={profilePictureUrl}
                                />
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-6"
                        >
                            Update User
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="
                        btn
                        btn-primary
                        w-full
                        mt-5
                        transition-all
                        duration-300
                        hover:scale-105
                        "
                        >
                            ← Go Back
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateUser;