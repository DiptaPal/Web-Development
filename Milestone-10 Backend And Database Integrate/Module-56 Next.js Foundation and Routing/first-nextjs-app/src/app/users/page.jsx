import Link from "next/link";

export const metadata = {
    title: 'All Users',
    description: 'All users information',
}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5 my-5">
                {
                    users.map(user => <div key={user.id} className="card bg-base-100 shadow-md border border-base-200">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>

                            <p className="text-gray-500">@{user.username}</p>

                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                {user.email}
                            </p>

                            <p>
                                <span className="font-semibold">Phone:</span>{" "}
                                {user.phone}
                            </p>

                            <p>
                                <span className="font-semibold">City:</span>{" "}
                                {user.address.city}
                            </p>

                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;