
const User = ({ user }) => {
    return (
        <div className="card bg-base-100 min-w-80 shadow-xl border border-base-300">
            <div className="card-body items-center text-center">
                {/* Avatar */}
                <div className="avatar mb-3">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            src={user.profilePictureUrl}
                            alt={user.name}
                        />
                    </div>
                </div>

                {/* User Information */}
                <h2 className="card-title">{user.name}</h2>

                <p className="text-base-content/70">
                    {user.email}
                </p>

            </div>
        </div>
    );
};

export default User;