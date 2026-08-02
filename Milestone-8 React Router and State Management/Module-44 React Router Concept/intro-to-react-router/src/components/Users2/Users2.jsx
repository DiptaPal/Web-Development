import { use } from 'react';

const Users2 = ({ usersPromise }) => {
    const usersData = use(usersPromise);
    console.log(usersData);
    return (
        <div>
            This is users 2.
        </div>
    );
};

export default Users2;