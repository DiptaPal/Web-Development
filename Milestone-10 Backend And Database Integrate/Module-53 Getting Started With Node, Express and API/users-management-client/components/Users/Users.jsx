import { use, useContext, useEffect } from 'react';
import { UserContext } from '../../src/UserContext';
import User from '../User/User';

const Users = ({ usersPromise }) => {

    const loadedUsers = use(usersPromise);

    const { users, setUsers } = useContext(UserContext);


    useEffect(() => {
        setUsers(loadedUsers);
    }, [loadedUsers, setUsers]);


    return (
        <div className="grid grid-cols-1 gap-6 justify-items-center">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;