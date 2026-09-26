const UserImage = ({ photoURL, className = "" }) => {
    const defaultImage =
        "https://i.ibb.co/zHVkTxyZ/istockphoto-1337144146-612x612.jpg";

    return (
        <img
            src={photoURL || defaultImage}
            alt="User"
            className={className}
            onError={(e) => {
                e.currentTarget.src = defaultImage;
            }}
        />
    );
};

export default UserImage;