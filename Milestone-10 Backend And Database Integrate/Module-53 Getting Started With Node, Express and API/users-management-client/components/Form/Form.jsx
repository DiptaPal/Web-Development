import { use } from 'react';
import { UserContext } from '../../src/UserContext';

const Form = () => {

    const { users, setUsers } = use(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const user = {
            name: form.name.value,
            email: form.email.value,
            profilePictureUrl: form.profilePictureUrl.value,
        };

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log("After Post: ", data.message);
                const newUsers = [...users, data.newUser];
                setUsers(newUsers)
            })

        form.reset();

    };

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-100 w-full max-w-md shadow-xl">
                <div className="card-body">

                    <h2 className="card-title justify-center text-2xl mb-4">
                        Add New User
                    </h2>

                    {/* Avatar */}
                    <div className="flex justify-center mb-4">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img
                                    src="https://i.pravatar.cc/150?img=12"
                                    alt="Profile"
                                />
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Profile Picture URL */}
                        <div className="mb-6">
                            <label className="label">
                                <span className="label-text">
                                    Profile Picture URL
                                </span>
                            </label>

                            <input
                                type="url"
                                name="profilePictureUrl"
                                placeholder="Enter profile picture URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Add User
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;