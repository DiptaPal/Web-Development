import { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
    const user = use(userPromise)
    const { name, username } = user;
    return (
        <div>
            <p><small>User Name: {username}</small></p>
            <p>Name: {name}</p>
        </div>
    );
};

export default UserDetails2;