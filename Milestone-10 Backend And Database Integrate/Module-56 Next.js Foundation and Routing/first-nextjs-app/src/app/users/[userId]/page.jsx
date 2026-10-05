
const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    return (
        <div>
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-base-100 shadow-lg rounded-2xl border border-base-200 p-6">

                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold">
                            {user.name}
                        </h1>

                        <p className="text-gray-500 mt-1">
                            @{user.username}
                        </p>
                    </div>

                    {/* Basic Information */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">
                            Contact Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{user.email}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-medium">{user.phone}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Website</p>
                                <p className="font-medium">{user.website}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">User ID</p>
                                <p className="font-medium">{user.id}</p>
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">
                            Address
                        </h2>

                        <div className="bg-base-200 rounded-xl p-5">
                            <p>
                                <span className="font-semibold">Street:</span>{" "}
                                {user.address.street}
                            </p>

                            <p>
                                <span className="font-semibold">Suite:</span>{" "}
                                {user.address.suite}
                            </p>

                            <p>
                                <span className="font-semibold">City:</span>{" "}
                                {user.address.city}
                            </p>

                            <p>
                                <span className="font-semibold">Zipcode:</span>{" "}
                                {user.address.zipcode}
                            </p>

                            <div className="mt-4">
                                <p className="font-semibold mb-1">Location</p>

                                <p className="text-sm text-gray-600">
                                    Latitude: {user.address.geo.lat}
                                </p>

                                <p className="text-sm text-gray-600">
                                    Longitude: {user.address.geo.lng}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Company
                        </h2>

                        <div className="bg-base-200 rounded-xl p-5">
                            <h3 className="text-lg font-bold">
                                {user.company.name}
                            </h3>

                            <p className="mt-2">
                                {user.company.catchPhrase}
                            </p>

                            <p className="text-sm text-gray-500 mt-2">
                                {user.company.bs}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserDetailsPage;