import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-center px-4 md:px-0">
            {
                users.map(user =>
                    <User key={user.id} user={user}></User>
                )
            }
        </div>
    );
};

export default Users;