import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    const { name, email, profilePictureUrl } = user.data;

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">

            {/* Animated Card */}
            <div className="group w-full max-w-md">

                <div
                    className="
                        card
                        bg-base-100
                        shadow-2xl
                        border
                        border-base-300
                        overflow-hidden
                        transition-all
                        duration-500
                        hover:-translate-y-3
                        hover:shadow-primary/30
                        animate-[fadeIn_0.8s_ease-out]
                    "
                >

                    {/* Top Section */}
                    <div className="h-32 bg-gradient-to-r from-primary via-secondary to-accent">
                    </div>

                    <div className="card-body items-center text-center -mt-20">

                        {/* Profile Picture */}
                        <div className="avatar">
                            <div
                                className="
                                    w-32
                                    rounded-full
                                    ring-4
                                    ring-base-100
                                    ring-offset-4
                                    ring-primary
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    group-hover:rotate-3
                                "
                            >
                                <img
                                    src={profilePictureUrl}
                                    alt={name}
                                />
                            </div>
                        </div>

                        {/* User Name */}
                        <h2 className="text-3xl font-bold mt-4">
                            {name}
                        </h2>

                        {/* Email */}
                        <p className="text-base-content/60 text-lg">
                            {email}
                        </p>

                        {/* User Information */}
                        <div className="divider w-full">
                            Profile Details
                        </div>

                        <div className="w-full space-y-3 text-left">

                            <div className="flex justify-between items-center bg-base-200 rounded-lg p-3">
                                <span className="font-semibold">
                                    Name
                                </span>
                                <span className="text-base-content/70">
                                    {name}
                                </span>
                            </div>

                            <div className="flex justify-between items-center bg-base-200 rounded-lg p-3">
                                <span className="font-semibold">
                                    Email
                                </span>
                                <span className="text-base-content/70 break-all ml-4">
                                    {email}
                                </span>
                            </div>

                        </div>

                        {/* Back Button */}
                        <button
                            onClick={() => window.history.back()}
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

                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserDetails;