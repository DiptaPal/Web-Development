import { Link } from 'react-router';

const User = ({ user, handleDeleteUser }) => {

    const { _id, name, email, profilePictureUrl } = user;

    return (
        <div className="card bg-base-100 w-full max-w-sm shadow-xl border border-base-300">

            <div className="card-body items-center text-center">

                {/* Profile Picture */}
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            src={profilePictureUrl}
                            alt={name}
                        />
                    </div>
                </div>

                {/* User Information */}
                <h2 className="card-title mt-3">
                    {name}
                </h2>

                <p className="text-base-content/70">
                    {email}
                </p>

                {/* Buttons */}
                <div className="card-actions mt-4 gap-3">

                    {/* Visit Profile */}
                    <Link
                        to={`/users/${_id}`}
                        className="btn btn-primary"
                    >
                        Visit Profile
                    </Link>

                    {/* Update Profile */}
                    <Link
                        to={`/update/${_id}`}
                        className="btn btn-warning"
                    >
                        Update
                    </Link>

                    {/* Delete Profile */}
                    <button
                        onClick={() => handleDeleteUser(_id)}
                        className="btn btn-error"
                    >
                        Delete
                    </button>

                </div>

            </div>
        </div>
    );
};

export default User;