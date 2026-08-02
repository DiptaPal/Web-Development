import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const params = useParams();
    /* const { userId } = useParams();
    console.log(userId); */

    const { name, username, email, website, address } = user;

    return (
        <div className="flex justify-center items-end my-10">
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="https://i.etsystatic.com/36262552/r/il/525e44/4200183617/il_570xN.4200183617_9a8b.jpg"
                        alt="user"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name} (<span className="text-xs">{username}</span>)</h2>
                    <p>{address.street} / {address.city}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">ID: {params.userId}</button>
                    </div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{email}</div>
                        <div className="badge badge-outline">{website}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;