import { Link } from 'react-router';

const User = ({ user }) => {
    const { id, name, username, email, website, address } = user;

    return (
        <div className="card bg-base-100 w-full md:w-96 shadow-sm">
            <figure>
                <img
                    src="https://i.etsystatic.com/36262552/r/il/525e44/4200183617/il_570xN.4200183617_9a8b.jpg"
                    alt="user" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{username}</div>
                </h2>
                <p>{address.street} / {address.city}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{email}</div>
                    <div className="badge badge-outline">{website}</div>
                </div>
                <Link to={`/users/${id}`} className="btn">Show Details</Link>
            </div>
        </div>
    );
};

export default User;