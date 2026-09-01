import { FaEnvelope, FaImage, FaUser } from "react-icons/fa";


const AddUser = ({ setUsers }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {
            name: form.name.value,
            email: form.email.value,
            profilePictureUrl: form.profilePictureUrl.value,
        };

        const res = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await res.json();

        if (data.success) {
            alert(data.message);
            user._id = data.result.insertedId;
            setUsers(prevUsers => [
                ...prevUsers,
                user
            ]);
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

                    <form onSubmit={handleSubmit} className="space-y-4">

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
                                />
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-6"
                        >
                            Add User
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;