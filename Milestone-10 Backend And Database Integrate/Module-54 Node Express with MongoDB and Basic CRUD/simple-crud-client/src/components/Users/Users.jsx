
import { use, useEffect } from 'react';
import User from '../User/User';
const Users = ({ usersPromise, users, setUsers }) => {
    const usersData = use(usersPromise);
    const initailUsers = usersData.data;

    useEffect(() => {
        setUsers(initailUsers)
    }, [initailUsers, setUsers])

    const handleDeleteUser = async (id) => {
        const res = await fetch(`http://localhost:3000/users/${id}`,
            {
                method: "DELETE",
            }
        )

        const data = await res.json();
        if (data.success) {
            alert("User Delete Successful");
            const remainingUsers = users.filter(user => user._id !== id);
            setUsers(remainingUsers);
        } else {
            alert(data.message);
        }
    }



    return (
        <div className="grid grid-cols-1  gap-8 justify-items-center">
            {
                users.map(user => <User key={user._id} user={user} handleDeleteUser={handleDeleteUser}></User>)
            }
        </div>
    );
};

export default Users;