
import { useLoaderData, useParams } from 'react-router';
const UserDetails = () => {
    const user = useLoaderData();
    const params = useParams();
    const { userId } = useParams();
    console.log(params);
    console.log(userId);

    const { website, name } = user;
    return (
        <div>
            <h3>User Details Here</h3>
            <h5>Name:{name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;